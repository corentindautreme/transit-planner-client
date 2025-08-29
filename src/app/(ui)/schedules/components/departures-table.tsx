'use client';

import { DeparturesAtStop } from '@/app/model/departures';
import { useEffect, useRef, useState } from 'react';
import { ArrowDown, X } from 'lucide-react';
import { clsx } from 'clsx';
import Link from 'next/link';
import { getDisplayTime } from '@/app/(ui)/utils/date-time-utils';
import ScheduleHeader from '@/app/(ui)/schedules/components/schedule-header';
import { StopAndRouteDeparture } from '@/app/model/stop';
import DeparturesOnRoute from '@/app/(ui)/departures/components/departures-on-route';

export default function DeparturesTable({line, departuresAtStop}: {
    line: string,
    departuresAtStop: DeparturesAtStop
}) {
    const [selectedDirection, setSelectedDirection] = useState(Object.keys(departuresAtStop.departures[line].departures)[0]);

    const [selectedDeparture, setSelectedDeparture] = useState<string>();
    const [routeDepartures, setRouteDepartures] = useState<StopAndRouteDeparture[]>();
    const departureRouteRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleOutSideClick = (event: MouseEvent) => {
            if (departureRouteRef.current && !departureRouteRef.current.contains(event.target as Node)) {
                setSelectedDeparture(undefined);
                setTimeout(() => setRouteDepartures(undefined), 100);
            }
        };
        window.addEventListener('mousedown', handleOutSideClick);

        return () => {
            window.removeEventListener('mousedown', handleOutSideClick);
        };
    }, [departureRouteRef]);

    const selectDeparture = (scheduledAt: string) => {
        if (!routeDepartures) {
            setSelectedDeparture(scheduledAt);
        }
    }

    const closeRouteDepartures = () => {
        setRouteDepartures(undefined);
        setSelectedDeparture(undefined);
    }

    useEffect(() => {
        async function fetchDeparturesOnRoute() {
            const url = `/api/departures/stops?line=${line}&direction=${selectedDirection}&from=${departuresAtStop.stop.id}&after=${selectedDeparture}&includePast=true`;
            const routeDepartures = await fetch(url).then(res => res.json()) as StopAndRouteDeparture[];
            routeDepartures.forEach(rd => rd.departures.forEach(d => {
                d.previous = d.scheduledAt < selectedDeparture!;
            }));
            setRouteDepartures(routeDepartures);
        }

        if (selectedDeparture) {
            fetchDeparturesOnRoute();
        }
    }, [selectedDeparture]);

    const isNext = (index: number): boolean => {
        const now = new Date();
        const departure = new Date(departuresAtStop.departures[line].departures[selectedDirection][index].scheduledAt);
        const previousDeparture = index > 0 ? new Date(departuresAtStop.departures[line].departures[selectedDirection][index - 1].scheduledAt) : null;
        return (index == 0 && now < departure) || (index > 0 && now > previousDeparture! && now < departure);
    }

    return (
        <>
            <div className={clsx('relative flex flex-col grow gap-3 overflow-hidden', {'blur-xs': selectedDeparture})}>
                <Link href={'#next'}
                      className="absolute bottom-2 right-2 flex items-center gap-1 rounded-xl p-3 bg-yellow-500 shadow-lg shadow-foreground/30">
                    <ArrowDown size={20}/>Next
                </Link>

                <ScheduleHeader line={line} type={departuresAtStop.departures[line].type} stop={departuresAtStop.stop}/>

                <div className="flex">
                    {Object.keys(departuresAtStop.departures[line].departures)
                        .filter(direction => direction !== departuresAtStop.stop.name)
                        .map((direction, index) =>
                            <button
                                onClick={() => setSelectedDirection(direction)}
                                key={direction}
                                className={clsx('flex-1 py-2 border-1 border-foreground',
                                    {
                                        'bg-foreground text-background': selectedDirection === direction,
                                        'rounded-l-lg': index === 0,
                                        'rounded-e-lg': index === Object.keys(departuresAtStop.departures[line].departures).length - 1
                                    }
                                )}
                            >
                                <div>
                                    To {direction}
                                </div>
                            </button>
                        )
                    }
                </div>

                <div className="grow flex flex-col gap-1 overflow-hidden overflow-y-scroll">
                    {departuresAtStop.departures[line].departures[selectedDirection].map((departure, index) => (
                        <button key={departure.scheduledAt}
                                onClick={() => selectDeparture(departure.scheduledAt)}
                        >
                            <div
                                id={isNext(index) ? 'next' : undefined}
                                className={clsx('w-full py-1 bg-background rounded-lg text-center',
                                    {
                                        'text-foreground/50': new Date(departure.scheduledAt) < new Date(),
                                        'font-bold': isNext(index)
                                    }
                                )}
                            >
                                {getDisplayTime(departure.scheduledAt)}
                            </div>
                        </button>
                    ))}
                </div>
            </div>
            {selectedDeparture && <div
                ref={departureRouteRef}
                className="z-1 w-full max-h-9/10 absolute left-0 bottom-0 flex flex-col gap-1 items-center p-2 bg-white rounded-t-xl shadow-[10px_0px_15px_rgba(0,0,0,0.25)]"
            >
                <div className="w-full flex items-center justify-end">
                    <button onClick={() => closeRouteDepartures()} className="rounded-full p-1 bg-foreground/10">
                        <X className="size-5"/>
                    </button>
                </div>
                <div className="w-full grow overflow-hidden overflow-y-scroll">
                    { !routeDepartures
                        ? (
                            <div className="flex flex-col gap-2 items-center py-10">
                                <div className={clsx('size-8 rounded-full animate-spin border-4 mask-conic-from-75% mask-conic-to-75%',
                                    {
                                        'border-yellow-500': departuresAtStop.departures[line].type === 'tram',
                                        'border-red-500': departuresAtStop.departures[line].type === 'trolleybus',
                                        'border-blue-500': departuresAtStop.departures[line].type === 'bus'
                                    }
                                )}></div>
                                <div>Loading...</div>
                            </div>
                        ) : <DeparturesOnRoute currentStop={departuresAtStop.stop.id} type={departuresAtStop.departures[line].type} loadedDepartures={routeDepartures}/>
                    }
                </div>
            </div>}
        </>
    );
}