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
            if (account) {
                return {
                    ...token,
                    accessToken: account.id_token,
                    expiresAt: account.expires_at,
                    refreshToken: account.refresh_token
                };
            } else if (Date.now() < token.expiresAt * 1000) {
                // Subsequent logins, but the `access_token` is still valid
                return token;
            } else {
                // Subsequent logins, but the `access_token` has expired, try to refresh it
                if (!token.refreshToken) throw new TypeError('Missing refresh_token');

                try {
                    // The `token_endpoint` can be found in the provider's documentation. Or if they support OIDC,
                    // at their `/.well-known/openid-configuration` endpoint.
                    // i.e. https://accounts.google.com/.well-known/openid-configuration
                    const response = await fetch('https://oauth2.googleapis.com/token', {
                        method: 'POST',
                        body: new URLSearchParams({
                            client_id: process.env.AUTH_GOOGLE_ID!,
                            client_secret: process.env.AUTH_GOOGLE_SECRET!,
                            grant_type: 'refresh_token',
                            refresh_token: token.refreshToken!
                        }),
                    });

                    const tokensOrError = await response.json();

                    if (!response.ok) {
                        throw tokensOrError;
                    }

                    const newTokens = tokensOrError as {
                        id_token: string;
                        access_token: string;
                        expires_in: number;
                        refresh_token?: string;
                    };

                    return {
                        ...token,
                        accessToken: newTokens.id_token,
                        expiresAt: Math.floor(Date.now() / 1000 + newTokens.expires_in),
                        // Some providers only issue refresh tokens once, so preserve if we did not get a new one
                        refreshToken: newTokens.refresh_token ? newTokens.refresh_token : token.refreshToken
                    };
                } catch (error) {
                    console.error('Error refreshing access token', error);
                    // If we fail to refresh the token, return an error so we can handle it on the page
                    token.error = 'RefreshTokenError';
                    return token;
                }
            }
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
