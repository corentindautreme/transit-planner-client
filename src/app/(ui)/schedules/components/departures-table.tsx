'use client';

import { DeparturesAtStop } from '@/app/model/departures';
import { useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { clsx } from 'clsx';
import Link from 'next/link';
import { getDisplayTime } from '@/app/(ui)/utils/date-time-utils';
import ScheduleHeader from '@/app/(ui)/schedules/components/schedule-header';

export default function DeparturesTable({line, departuresAtStop}: {
    line: string,
    departuresAtStop: DeparturesAtStop
}) {
    const [selectedDirection, setSelectedDirection] = useState(Object.keys(departuresAtStop.departures[line].departures)[0]);

    const isNext = (index: number): boolean => {
        const now = new Date();
        const departure = new Date(departuresAtStop.departures[line].departures[selectedDirection][index].scheduledAt);
        const previousDeparture = index > 0 ? new Date(departuresAtStop.departures[line].departures[selectedDirection][index - 1].scheduledAt) : null;
        return (index == 0 && now < departure) || (index > 0 && now > previousDeparture! && now < departure);
    }

    return (
        <div className="relative flex flex-col grow gap-3 overflow-hidden">
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
                    <div
                        id={isNext(index) ? 'next' : undefined}
                        key={departure.scheduledAt}
                        className={clsx('w-full py-1 bg-background rounded-lg text-center',
                            {
                                'text-foreground/50': new Date(departure.scheduledAt) < new Date(),
                                'font-bold': isNext(index)
                            }
                        )}
                    >
                        {getDisplayTime(departure.scheduledAt)}
                    </div>
                ))}
            </div>
        </div>
    );
}