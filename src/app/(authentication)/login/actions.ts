'use server';

import {signIn} from '../../../../auth';
import {AuthError} from 'next-auth';

export async function authenticateWithGoogle(
    prevState: string | undefined,
    formData: FormData
) {
    try {
        await signIn('google', formData)
    } catch (error) {
        if (error instanceof AuthError) {
            return 'Something went wrong.';
        }
        // it looks like the redirection that takes place when you're not logged in is done via a thrown error: you need
        // to leave this throw here
        throw error;
    }
}