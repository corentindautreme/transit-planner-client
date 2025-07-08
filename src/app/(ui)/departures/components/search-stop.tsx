'use client';

import { Stop } from '@/app/model/stop';
import Link from 'next/link';
import { ChangeEvent, useState } from 'react';
import { clsx } from 'clsx';
import { BusFront, Equal, Octagon, TramFront } from 'lucide-react';

export default function SearchStop({stops}: { stops: Stop[] }) {
    const [matchingStops, setMatchingStops] = useState<Stop[]>([]);
    let debounceTimeoutId: NodeJS.Timeout;

    const debouncedSearch = (e: ChangeEvent<HTMLInputElement>) => {
        clearTimeout(debounceTimeoutId);
        debounceTimeoutId = setTimeout(() => {
            if (e.target.value.length < 3) {
                setMatchingStops([]);
                return;
            }
            const normalizedInput = e.target.value.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');
            const matchingStops = stops.filter(s => s.name.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '').includes(normalizedInput));
            setMatchingStops(matchingStops.length == 0 ? undefined : matchingStops);
        }, 500);
    }

    return (
        <div className="bg-white rounded-lg p-3">
            <input
                className={clsx('w-full bg-foreground/10 p-2', {
                    'rounded-t-lg': !!matchingStops && matchingStops.length > 0,
                    'rounded-lg': !matchingStops || matchingStops.length == 0,
                })}
                type="text"
                placeholder="Enter stop name..."
                size={1}
                onChange={e => debouncedSearch(e)}
            />
            {!!matchingStops && matchingStops.length > 0 && matchingStops.map((stop: Stop, index: number) => (
                <div key={`autocomplete-${stop.name}`}>
                    <div className="w-full border-t-1 border-foreground/30"></div>
                    <Link
                        className={clsx('flex items-center p-2 bg-foreground/10',
                            {
                                'rounded-b-lg': index === matchingStops.length - 1,
                            }
                        )} key={stop.name} href={`/departures/${stop.id}`}>
                        <div className="me-1 font-bold">{stop.name}</div>
                        {stop.connections.some(c => c.type === 'tram') && (
                            <TramFront size={18}/>
                        )}
                        {stop.connections.some(c => c.type === 'trolleybus') && (
                            <div className="relative">
                                <BusFront size={18}/>
                                <div className="absolute h-1.5 w-4 -top-1 overflow-hidden">
                                    <div className="absolute transform-[rotate(-90deg)]">
                                        <Equal size={18} className="relative"/>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Link>
                </div>
            ))}
            {!matchingStops && (
                <div className="pt-5 flex flex-col items-center gap-1 text-foreground/50">
                    <Octagon/>
                    <span className="text-sm">No stop found</span>
                </div>
            )}
        </div>
    )
}