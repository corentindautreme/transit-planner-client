'use client';

import { useActionState } from 'react';
import { authenticateWithGoogle } from '@/app/(authentication)/login/actions';
import { useSearchParams } from 'next/navigation';
import { clsx } from 'clsx';
import { CircleAlert, Lock, LogIn, XCircle } from 'lucide-react';

export default function LoginForm() {
    const searchParams = useSearchParams();
    const error = searchParams.get('error');
    const callbackUrl = error || !searchParams.get('callbackUrl') ? '/' : searchParams.get('callbackUrl')!;
    const [errorMessage, formAction, isPending] = useActionState(authenticateWithGoogle, undefined);

    return (
        <main className="flex flex-col items-center justify-center bg-white rounded-lg">
            {error && <div className="w-72 flex items-center rounded-xl bg-red-500 p-3 mb-2 text-background">
                { error == "AccessDenied" && <>
                    <XCircle className="shrink-0 h-5 w-5 me-2"/>
                    Access denied
                </>}
                { error != "AccessDenied" && <div className="flex items-center break-all">
                    <XCircle className="shrink-0 h-5 w-5 me-2"/>
                    <div>
                        <div>Unable to sign you in</div>
                        <div className="text-sm">(error message: {error})</div>
                    </div>
                </div>}
            </div>}
            <div className="flex flex-col w-72 items-center rounded-xl py-12 px-6 bg-background">
                <div className="w-fit bg-foreground/10 p-4 rounded-full">
                    <Lock className="size-8"/>
                </div>
                <h1 className="font-bold my-1 text-lg">Unauthenticated</h1>
                <div className="text-center my-5">
                    Please log in with your Google account to access this app.
                </div>
                <form action={formAction}>
                    <input type="hidden" name="redirectTo" value={callbackUrl}/>
                    <button
                        className={clsx('flex items-center rounded-lg px-3 py-2',
                            {
                                'bg-none border-1 border-foreground/50 text-foreground/50 cursor-not-allowed': isPending,
                                'bg-yellow-500 cursor-pointer': !isPending
                            }
                        )}
                        type="submit"
                        disabled={isPending}
                    >
                        <LogIn className="w-6 me-1"/>
                        { !isPending ? "Sign in with Google" : "Redirecting to Google..." }
                    </button>
                    <div className="">
                        {errorMessage && (
                            <>
                                <CircleAlert className="h-5 w-5"/>
                                <p className="text-sm">{errorMessage}</p>
                            </>
                        )}
                    </div>
                </form>
            </div>
        </main>
    );
}