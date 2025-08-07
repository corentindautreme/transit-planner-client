'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import { ArrowLeft, XCircle } from 'lucide-react';

function Error() {
    return (
        <main className="flex flex-col items-center justify-center rounded-lg bg-white">
            <div className="flex flex-col w-72 items-center rounded-xl py-12 px-6 bg-background">
                <div className="w-fit bg-foreground/10 p-4 rounded-full">
                    <XCircle className="size-8"/>
                </div>
                <h1 className="font-bold my-1 text-lg">Error</h1>
                <div className="text-center my-5">
                    Well that didn't work, did it.
                </div>
                <Link
                    href="/login"
                    className="flex items-center gap-1 rounded-lg px-3 py-2 bg-yellow-500"
                >
                    <ArrowLeft className="size-6"/>
                    Back to the login page
                </Link>
            </div>
        </main>
    );
}

export default function Page() {
    return (
        <main>
            <Suspense>
                <Error/>
            </Suspense>
        </main>
    );
}