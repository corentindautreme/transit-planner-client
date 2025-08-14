import { Metadata } from 'next';
import { Suspense } from 'react';
import FavoriteDepartures from '@/app/(ui)/departures/components/favorite-departures';
import { Search } from 'lucide-react';
import { Stop } from '@/app/model/stop';
import SearchStop from '@/app/(ui)/departures/components/search-stop';
import { fetch } from '@/app/(ui)/utils/fetch';

export const metadata: Metadata = {
    title: 'Departures'
};

export default async function Page() {
    const stops = await fetch(`${process.env.BACKEND_URL}/stops`).then(res => res.json()) as Stop[];

    return (
        <Suspense fallback={'Loading...'}>
            <div className="h-full flex flex-col gap-2">
                <div className="flex items-center gap-x-2 font-bold mb-1">
                    <Search size={18}/>
                    Search stop
                </div>
                <SearchStop stops={stops}/>
                <FavoriteDepartures/>
            </div>
        </Suspense>
    );
}
