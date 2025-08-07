import { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from 'next';
import type { NextAuthConfig, Session } from 'next-auth';
import getServerSession from 'next-auth';
import prisma from '@/lib/db/client';

async function isUserWhitelisted(email: string) {
    const user = await prisma.whitelist.findFirst({where: {email: email}});
    return user != null;
}

export const authConfig = {
    pages: {
        signIn: '/login',
        error: '/login/error'
    },
    callbacks: {
        async signIn({user}) {
            if (user.email) {
                return isUserWhitelisted(user.email);
            }
            return false;
        },
        authorized({auth, request: {nextUrl}}) {
            const isLoggedIn = !!auth?.user;
            const isOnHomeScreen = nextUrl.pathname.startsWith('/');
            if (isOnHomeScreen) {
                if (isLoggedIn) return true;
                console.log('Unauthenticated user, redirecting to login page')
                return false; // Redirect unauthenticated users to login page
            } else if (isLoggedIn) {
                console.log('Redirecting to URL /')
                return Response.redirect(new URL('/', nextUrl));
            }
            return true;
        },
        jwt: async ({token, user, account}) => {
            // google only return the id_token (= the access token) once, when the user logs in
            // it's up to us to save it so we can re-send it to the backend
            if (account && account.id_token) {
                token.accessToken = account.id_token;
            }

            return token
        },
        session: async ({session, token, user}) => {
            // if we want to make the accessToken available in components, then we have to explicitly forward it here
            return {...session, token: token.accessToken}
        }
    },
    providers: [], // Add providers with an empty array for now // I assume this array is overridden in auth.ts
} satisfies NextAuthConfig;

export async function getToken(
    ...args:
        | [GetServerSidePropsContext['req'], GetServerSidePropsContext['res']]
        | [NextApiRequest, NextApiResponse]
        | []
): Promise<string> {
    return (await getServerSession(...args, authConfig).auth() as Session & { token: string }).token;
}
