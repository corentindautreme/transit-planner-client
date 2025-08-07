import { Metadata } from 'next';
import { Suspense } from 'react';
import FavoriteDepartures from '@/app/(ui)/departures/components/favorite-departures';
import { Heart, Search } from 'lucide-react';
import { FavoriteStop, Stop } from '@/app/model/stop';
import SearchStop from '@/app/(ui)/departures/components/search-stop';
import { fetch } from '@/app/(ui)/utils/fetch';

export const metadata: Metadata = {
    title: 'Departures'
};

export default async function Page() {
    const stops = await fetch(`${process.env.BACKEND_URL}/stops`).then(res => res.json()) as Stop[];
    const favorites: FavoriteStop[] = [
        {
            id: 10,
            name: 'Alipašin Most',
            line: '3',
            type: 'tram',
            direction: 'Baščaršija'
        },
        {
            id: 10,
            name: 'Alipašin Most',
            line: '3',
            type: 'tram',
            direction: 'Ilidža'
        },
        {
            id: 14,
            name: 'Socijalno',
            line: '3',
            type: 'tram',
            direction: 'Ilidža'
        },
        {
            id: 31,
            name: 'Stadion Grbavica',
            line: '103',
            type: 'trolleybus',
            direction: 'Dobrinja'
        },
        {
            id: 31,
            name: 'Stadion Grbavica',
            line: '107',
            type: 'trolleybus',
            direction: 'Dobrinja'
        },
        {
            id: 77,
            name: 'Međunarodni Aerodrom Sarajevo',
            line: '200E',
            type: 'bus',
            direction: 'Bentbaša'
        }
    ];

    return (
        <Suspense fallback={'Loading...'}>
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-x-2 font-bold mb-1">
                    <Search size={18}/>
                    Search stop
                </div>
                <SearchStop stops={stops}/>
                <div className="flex items-center gap-x-2 font-bold mb-1">
                    <Heart size={18}/>
                    Favorite stops
                </div>
                <FavoriteDepartures stops={favorites}/>
            </div>
        </Suspense>
    );
}
