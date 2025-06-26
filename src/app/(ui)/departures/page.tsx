import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
    title: 'Departures'
};

export default async function Page() {
    return (
        <Suspense fallback={'Loading...'}>

        </Suspense>
    );
}
