import { Metadata } from 'next';
import { Suspense } from 'react';
import NextDeparturesAtStop from '@/app/(ui)/departures/components/next-departures-at-stop';
import FavoriteDepartures from '@/app/(ui)/departures/components/favorite-departures';
import { DepartureForStopAndLine } from '@/app/model/departures';
import { Heart, Search, TramFront } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Departures'
};

export default async function Page() {
    const departures: DepartureForStopAndLine[] = [
        {
            stop: 'Alipašin Most',
            line: '3',
            type: 'tram',
            direction: 'Baščaršija',
            departures: [
                {
                    scheduledAt: '1970-01-01T08:00:00.000Z',
                    displayTime: 'now'
                },
                {
                    scheduledAt: '1970-01-01T08:02:00.000Z',
                    displayTime: '2 min'
                },
                {
                    scheduledAt: '1970-01-01T08:11:00.000Z',
                    displayTime: '10:11'
                }
            ]
        },
        {
            stop: 'Alipašin Most',
            line: '3',
            type: 'tram',
            direction: 'Ilidža',
            departures: [
                {
                    scheduledAt: '1970-01-01T08:00:00.000Z',
                    displayTime: '1 min'
                },
                {
                    scheduledAt: '1970-01-01T08:02:00.000Z',
                    displayTime: '5 min'
                },
                {
                    scheduledAt: '1970-01-01T08:11:00.000Z',
                    displayTime: '10:14'
                }
            ]
        },
        {
            stop: 'Trg Austrije',
            line: '105',
            type: 'trolleybus',
            direction: 'Vogošća Terminal',
            departures: [
                {
                    scheduledAt: '1970-01-01T08:00:00.000Z',
                    displayTime: '1 min'
                },
                {
                    scheduledAt: '1970-01-01T08:02:00.000Z',
                    displayTime: '5 min'
                },
                {
                    scheduledAt: '1970-01-01T08:11:00.000Z',
                    displayTime: '10:14'
                }
            ]
        }
    ];

    return (
        <Suspense fallback={'Loading...'}>
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-x-2 font-bold mb-1">
                    <Search size={18}/>
                    Search stop
                </div>
                <div className="bg-white rounded-lg p-3">
                    <input className="w-full" type="text" placeholder="Enter stop name..." size={1}/>
                </div>
                <div className="flex items-center gap-x-2 font-bold mb-1">
                    <Heart size={18}/>
                    Favorite stops
                </div>
                <FavoriteDepartures departures={departures}/>
            </div>
        </Suspense>
    );
}
