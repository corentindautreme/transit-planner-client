'use client';

import { DepartureByLine, DepartureDetails } from '@/app/model/departures';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, GitCommit, Heart } from 'lucide-react';
import { LineAndDirectionSign, LineSign } from '@/app/(ui)/lines/components/line-and-direction-sign';
import { getDisplayTime } from '@/app/(ui)/utils/date-time-utils';
import { clsx } from 'clsx';

export default function DeparturesList({stop}: { stop: string }) {
    const [departing, setDeparting] = useState(false);
    const [departingCount, setDepartingCount] = useState(0);
    const [departures, setDepartures] = useState<DepartureByLine>();
    const [inlineDepartures, setInlineDepartures] = useState<DepartureDetails[]>();
    const inlineDeparturesRef = useRef(inlineDepartures);
    const [favoriteSelection, setFavoriteSelection] = useState<string>();
    const favoriteSelectionRef = useRef(null);

    useEffect(() => {
        async function fetchDepartures() {
            try {
                const departures: DepartureByLine = await fetch(`http://localhost:4000/departures/next?from=${stop}`).then(res => res.json());
                setDepartures(departures);
                const now = new Date();
                const newInlineDepartures: DepartureDetails[] = Object.keys(departures)
                    .map(line => Object.keys(departures[line].departures)
                        .map(direction => departures[line].departures[direction]
                            .map(departure => (
                                {
                                    line: line,
                                    direction: direction,
                                    type: departures[line].type,
                                    time: departure.scheduledAt,
                                    displayTime: getDisplayTime(departure.scheduledAt, now)
                                } as DepartureDetails)
                            )
                        ).flat()
                    )
                    .flat()
                    .sort((d1, d2) => d1.time.localeCompare(d2.time));
                if (!!inlineDeparturesRef.current) {
                    const departing = inlineDeparturesRef.current[0].displayTime === 'now'
                        && (newInlineDepartures[0].direction !== inlineDeparturesRef.current[0].direction
                            || newInlineDepartures[0].line !== inlineDeparturesRef.current[0].line
                            || newInlineDepartures[0].time !== inlineDeparturesRef.current[0].time);
                    setDeparting(departing);
                    setDepartingCount(inlineDeparturesRef.current.filter(d => d.displayTime == 'now').length);
                }
                setTimeout(() => {
                    setInlineDepartures(newInlineDepartures);
                    inlineDeparturesRef.current = newInlineDepartures;
                    setDeparting(false);
                }, 700);
            } finally {
                setTimeout(fetchDepartures, 10_000);
            }
        }

        fetchDepartures();
    }, []);

    useEffect(() => {
        const handleOutSideClick = (event: MouseEvent) => {
            if (favoriteSelectionRef.current && !favoriteSelectionRef.current.contains(event.target)) {
                setFavoriteSelection(undefined);
            }
        };
        window.addEventListener('mousedown', handleOutSideClick);

        return () => {
            window.removeEventListener('mousedown', handleOutSideClick);
        };
    }, [favoriteSelectionRef]);

    return (!departures || !inlineDepartures) ? 'Loading...' : (
        <>
            <div className="flex flex-col gap-y-2">
                <Link className="w-fit flex items-center gap-x-1" href="/departures"><ChevronLeft/>Back</Link>

                <div className="flex flex-col gap-y-1 bg-background rounded-lg p-3 overflow-x-clip text-ellipsis">
                    <div className="flex flex-col items-center text-xl">
                        <GitCommit size={28}/>
                        {stop}
                    </div>

                    <div className="relative flex items-center justify-center flex-wrap gap-1">
                        {Object.keys(departures).map((line, index) =>
                            <div key={line} className="flex flex-col items-stretch">
                                <button><LineSign name={line} type={departures[line].type}/></button>
                                <button className="flex justify-center py-1" onClick={() => setFavoriteSelection(line)}>
                                    <Heart size={18}/>
                                    <div
                                        ref={favoriteSelectionRef}
                                        className={clsx('max-w-[100dvw] overflow-hidden text-ellipsis absolute bottom-0 transform-[translateY(100%)] flex items-stretch rounded-xl text-sm border-1 border-foreground/10 shadow-lg/30',
                                            {
                                                'flex': favoriteSelection === line,
                                                'hidden': favoriteSelection !== line,
                                                'bg-yellow-500': departures[line].type === 'tram',
                                                'bg-red-500 text-white': departures[line].type === 'trolleybus',
                                            }
                                        )}>
                                        <div className="flex items-center gap-1 px-1 py-2">
                                            <div className="overflow-hidden text-ellipsis">
                                                {Object.keys(departures[line].departures)[0]}
                                            </div>
                                            <Heart className="shrink-0" size={14}/>
                                        </div>
                                        {Object.keys(departures[line].departures).length > 1 && <>
                                            <div className="shrink-0 w-[1px] bg-black"></div>
                                            <div className="flex items-center gap-1 px-1 py-2">
                                                <div className="overflow-hidden text-ellipsis">
                                                    {Object.keys(departures[line].departures)[1]}
                                                </div>
                                                <Heart className="shrink-0" size={14}/>
                                            </div>
                                        </>}
                                    </div>
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex flex-col gap-y-2">
                    {inlineDepartures.map((departure, index) => (
                        <div
                            key={`${departure.line}-${departure.time}`}
                            className={clsx('flex items-center justify-between bg-background p-3 rounded-lg',
                                {
                                    'transition-opacity ease-out duration-700 opacity-0': departing && index < departingCount
                                }
                            )}
                        >
                            <LineAndDirectionSign
                                name={departure.line}
                                type={departure.type}
                                direction={departure.direction}
                            />
                            <div className={clsx({
                                'animate-pulse font-bold': departure.displayTime === 'now'
                            })}>{departure.displayTime}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}