'use client';

import { Departure, DeparturesAtStop } from '@/app/model/departures';
import { LineAndDirectionSign } from '@/app/(ui)/lines/components/line-and-direction-sign';
import { LineType } from '@/app/model/line-type';
import { MapPin, Signpost } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { getRelativeDisplayTime } from '@/app/(ui)/utils/date-time-utils';
import { clsx } from 'clsx';

export default function NextDeparturesAtStop({stopId, stopName, line, direction, type}: {
    stopId: number,
    stopName: string,
    line: string,
    type: LineType,
    direction: string
}) {
    const [departing, setDeparting] = useState(false);
    const [departingCount, setDepartingCount] = useState(0);
    const [departures, setDepartures] = useState<Departure[]>();
    const departuresRef = useRef(departures);

    useEffect(() => {
        async function fetchNextDepartures() {
            try {
                const now = new Date();
                const newDepartures: Departure[] = await fetch(`/api/departures/next?from=${stopId}&line=${line}&direction=${direction}&limit=3`)
                    .then(res => res.json())
                    .then((departuresByLine: DeparturesAtStop) => departuresByLine.departures[line].departures[direction])
                    .then(departures => departures.map(d => ({
                        ...d,
                        displayTime: getRelativeDisplayTime(d.scheduledAt, now)
                    } as Departure)));
                if (!!departuresRef.current) {
                    const departing = departuresRef.current[0].displayTime === 'now' && newDepartures[0].displayTime !== 'now';
                    setDeparting(departing);
                    setDepartingCount(departuresRef.current.filter(d => d.displayTime == 'now').length);
                }
                setTimeout(() => {
                    setDepartures(newDepartures);
                    departuresRef.current = newDepartures;
                    setDeparting(false);
                }, 700);
            } finally {
                setTimeout(fetchNextDepartures, 10_000);
            }
        }

        fetchNextDepartures();
    }, []);

    return (
        <div className="flex flex-col gap-2 bg-white rounded-lg p-3">
            <StopName name={stopName}/>
            <div className="w-full border-t-1 border-foreground/30"></div>
            <div className="flex font-bold justify-center">
                <LineAndDirectionSign
                    name={line}
                    type={type}
                    direction={direction}
                />
            </div>
            <div className="w-full border-t-1 border-foreground/30"></div>
            {!departures && <DeparturesSkeleton/>}
            {!!departures && departures.length == 0 && (
                <div className="flex flex-col items-center text-foreground/50 py-3">
                    <Signpost size={32} strokeWidth={1}/>
                    <div className="text-xs text-center">No upcoming departure</div>
                </div>
            )}
            <div className="text-center">
                {!!departures && departures.length > 0 && departures.map((departure: Departure, index: number) => (
                    <div key={`${stopName}-${line}-${direction}-${index}`} className={clsx({
                        'transition-opacity ease-out duration-700 opacity-0': departing && index < departingCount
                    })}>
                        <div className={clsx({
                            'animate-pulse font-bold': departure.displayTime === 'now'
                        })}>
                            {departure.displayTime}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function StopName({name}: {name: string}) {
    return name.length > 16 ? (
        <div className="relative w-full flex overflow-hidden">
            <div className="animate-news-ticker flex items-center text-xs font-bold gap-1">
                <MapPin size={14} className="shrink-0 bg-background"/>
                <div className="grow whitespace-nowrap">
                    <span>{name}</span>
                </div>
            </div>
            <div
                className="absolute left-1 animate-news-ticker-alt flex items-center text-xs font-bold gap-1">
                <MapPin size={14} className="shrink-0 bg-background"/>
                <div className="grow whitespace-nowrap">
                    <span>{name}</span>
                </div>
            </div>
        </div>
    ) : (
        <div className="flex items-center justify-center text-xs font-bold gap-1">
            <MapPin size={14} className="shrink-0 bg-background"/>
            {name}
        </div>
    );
}

export function DeparturesSkeleton() {
    return <div className="flex flex-col items-center gap-y-1">
        <div className="rounded bg-foreground/30 w-12 h-5 animate-pulse"/>
        <div className="rounded bg-foreground/30 w-12 h-5 animate-pulse"/>
        <div className="rounded bg-foreground/30 w-12 h-5 animate-pulse"/>
    </div>
}