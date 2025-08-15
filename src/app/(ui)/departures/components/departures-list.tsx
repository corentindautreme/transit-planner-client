'use client';

import { DepartureDetails, DeparturesAtStop } from '@/app/model/departures';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, GitCommit, Heart, Signpost, X } from 'lucide-react';
import { LineAndDirectionSign, LineSign } from '@/app/(ui)/lines/components/line-and-direction-sign';
import { getRelativeDisplayTime } from '@/app/(ui)/utils/date-time-utils';
import { clsx } from 'clsx';
import { FavoriteStop } from '@/app/model/stop';

export default function DeparturesList({stopId}: { stopId: number }) {
    const [departing, setDeparting] = useState(false);
    const [departingCount, setDepartingCount] = useState(0);
    const [departures, setDepartures] = useState<DeparturesAtStop>();
    const [inlineDepartures, setInlineDepartures] = useState<DepartureDetails[]>();
    const inlineDeparturesRef = useRef(inlineDepartures);

    const [selectedLines, setSelectedLines] = useState<string[]>([]);

    const [favoriteSelection, setFavoriteSelection] = useState<string>();
    const favoriteSelectionRef = useRef<HTMLDivElement | null>(null);
    const favoritesStops = JSON.parse(localStorage.getItem('favoriteStops') || '[]') as FavoriteStop[];
    const [favorites, setFavorites] = useState<FavoriteStop[]>(favoritesStops);

    const isFavorite = (line: string, direction?: string) => {
        return favorites.some(f => f.id === stopId && f.line === line && (!direction || f.direction === direction));
    }

    const toggleSelectedLine = (line: string) => {
        const newSelectedLines = [...selectedLines];
        setSelectedLines(newSelectedLines.includes(line)
            ? newSelectedLines.filter(l => l != line)
            : [...newSelectedLines, line]
        );
    };

    const toggleFavorite = (line: string, direction: string) => {
        if (isFavorite(line, direction)) {
            const newFavorites = [...favorites].filter(f => f.line !== line || f.direction !== direction);
            localStorage.setItem('favoriteStops', JSON.stringify(newFavorites));
            setFavorites(newFavorites);
        } else {
            const newFavorites: FavoriteStop[] = [
                ...favorites,
                {
                    id: stopId,
                    name: departures!.stop.name,
                    line: line,
                    type: departures!.departures[line].type,
                    direction: direction
                }
            ];
            localStorage.setItem('favoriteStops', JSON.stringify(newFavorites));
            setFavorites(newFavorites);
        }
    };

    useEffect(() => {
        async function fetchDepartures() {
            try {
                const departures: DeparturesAtStop = await fetch(`/api/departures/next?from=${stopId}`).then(res => res.json());
                setDepartures(departures);
                const now = new Date();
                const newInlineDepartures: DepartureDetails[] = Object.keys(departures.departures)
                    .map(line => Object.keys(departures.departures[line].departures)
                        .map(direction => departures.departures[line].departures[direction]
                            .map(departure => (
                                {
                                    line: line,
                                    direction: direction,
                                    type: departures.departures[line].type,
                                    time: departure.scheduledAt,
                                    displayTime: getRelativeDisplayTime(departure.scheduledAt, now)
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
            if (favoriteSelectionRef.current && !favoriteSelectionRef.current.contains(event.target as Node)) {
                setFavoriteSelection(undefined);
            }
        };
        window.addEventListener('mousedown', handleOutSideClick);

        return () => {
            window.removeEventListener('mousedown', handleOutSideClick);
        };
    }, [favoriteSelectionRef]);

    return (!departures || !inlineDepartures) ? <DeparturesListSkeleton/> : (
        <>
            <div className={clsx('h-full flex flex-col gap-y-2', {'blur-xs': favoriteSelection})}>
                <Link className="w-fit flex items-center gap-x-1" href="/departures"><ChevronLeft/>Back</Link>

                <div className="flex flex-col gap-y-1 bg-background rounded-lg p-3 overflow-x-clip text-ellipsis">
                    <div className="flex flex-col items-center text-xl">
                        <GitCommit size={28}/>
                        <div className="text-center">{departures.stop.name}</div>
                    </div>

                    <div className="flex items-center justify-center flex-wrap gap-1">
                        {Object.keys(departures.departures).map(line =>
                            <div key={line} className="flex flex-col items-stretch">
                                <button
                                    className={clsx({'opacity-50': selectedLines.length > 0 && !selectedLines.includes(line)})}
                                    onClick={() => toggleSelectedLine(line)}
                                >
                                    <LineSign name={line} type={departures.departures[line].type}/>
                                </button>
                                <button className={clsx('relative flex justify-center py-1', {
                                    'text-yellow-500': isFavorite(line) && departures.departures[line].type == 'tram',
                                    'text-red-500': isFavorite(line) && departures.departures[line].type == 'trolleybus',
                                    'text-sky-500': isFavorite(line) && departures.departures[line].type == 'bus'
                                })}
                                        onClick={() => setFavoriteSelection(line)}
                                >
                                    <Heart size={18} className={clsx({'fill-current': isFavorite(line)})}/>
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex flex-col gap-y-2">
                    {inlineDepartures
                        .filter(departure => selectedLines.length == 0 || selectedLines.includes(departure.line))
                        .map((departure, index) => (
                            <div
                                key={`${departure.line}-${departure.direction}-${departure.time}`}
                                className={clsx('flex items-center justify-between bg-background p-3 rounded-lg',
                                    {
                                        'transition-opacity ease-out duration-700 opacity-0': departing && index < departingCount
                                    }
                                )}
                            >
                                <LineAndDirectionSign name={departure.line} type={departure.type}
                                                      direction={departure.direction}/>
                                <div className={clsx({'animate-pulse font-bold': departure.displayTime === 'now'})}>
                                    {departure.displayTime}
                                </div>
                            </div>
                        ))}
                </div>
                {inlineDepartures.length == 0 && (
                    <div className="grow flex flex-col gap-2 items-center justify-center text-foreground/50">
                        <Signpost size={64} strokeWidth={1}/>
                        <div className="text-center">No upcoming departure</div>
                    </div>
                )}
            </div>
            {favoriteSelection && <div
                ref={favoriteSelectionRef}
                className={clsx('z-1 w-full absolute left-0 bottom-0 flex flex-col gap-1 items-center p-2 bg-white rounded-t-xl shadow-[10px_0px_15px_rgba(0,0,0,0.25)]',
                    {}
                )}
            >
                <div className="w-full flex items-center justify-between">
                    <div className="size-7"></div>
                    <LineSign name={favoriteSelection} type={departures.departures[favoriteSelection].type}/>
                    <button
                        onClick={() => setFavoriteSelection(undefined)}
                        className="rounded-full p-1 bg-foreground/10"
                    >
                        <X className="size-5"/>
                    </button>
                </div>
                <div className="w-full flex items-stretch gap-1 pt-3 pb-6">
                    <button
                        className="flex flex-1 flex-col gap-1 items-center justify-center px-4"
                        onClick={() => toggleFavorite(
                            favoriteSelection,
                            Object.keys(departures.departures[favoriteSelection].departures)[0]
                        )}
                    >
                        <div className="text-xs/2">To</div>
                        <div className="font-bold">{Object.keys(departures.departures[favoriteSelection].departures)[0]}</div>
                        <div className={clsx({
                            'text-yellow-500': isFavorite(favoriteSelection, Object.keys(departures.departures[favoriteSelection].departures)[0]) && departures.departures[favoriteSelection].type == 'tram',
                            'text-red-500': isFavorite(favoriteSelection, Object.keys(departures.departures[favoriteSelection].departures)[0]) && departures.departures[favoriteSelection].type == 'trolleybus',
                            'text-sky-500': isFavorite(favoriteSelection, Object.keys(departures.departures[favoriteSelection].departures)[0]) && departures.departures[favoriteSelection].type == 'bus'
                        })}>
                            <Heart size={18}
                                   className={clsx({'fill-current': isFavorite(favoriteSelection, Object.keys(departures.departures[favoriteSelection].departures)[0])})}/>
                        </div>
                    </button>
                    {Object.keys(departures.departures[favoriteSelection].departures).length > 1 &&
                        <>
                            <div className="shrink-0 flex justify-self-stretch border-e-1"></div>
                            <button
                                className="flex flex-1 flex-col gap-1 items-center justify-center px-4"
                                onClick={() => toggleFavorite(
                                    favoriteSelection,
                                    Object.keys(departures.departures[favoriteSelection].departures)[1]
                                )}
                            >
                                <div className="text-xs/2">To</div>
                                <div className="font-bold">{Object.keys(departures.departures[favoriteSelection].departures)[1]}</div>
                                <div className={clsx({
                                    'text-yellow-500': isFavorite(favoriteSelection, Object.keys(departures.departures[favoriteSelection].departures)[1]) && departures.departures[favoriteSelection].type == 'tram',
                                    'text-red-500': isFavorite(favoriteSelection, Object.keys(departures.departures[favoriteSelection].departures)[1]) && departures.departures[favoriteSelection].type == 'trolleybus',
                                    'text-sky-500': isFavorite(favoriteSelection, Object.keys(departures.departures[favoriteSelection].departures)[1]) && departures.departures[favoriteSelection].type == 'bus'
                                })}>
                                    <Heart size={18}
                                           className={clsx({'fill-current': isFavorite(favoriteSelection, Object.keys(departures.departures[favoriteSelection].departures)[1])})}/>
                                </div>
                            </button>
                        </>
                    }
                </div>
            </div>}
        </>
    );
}

function DeparturesListSkeleton() {
    return (
        <div className="h-full flex flex-col gap-y-2">
            <Link className="w-fit flex items-center gap-x-1" href="/departures"><ChevronLeft/>Back</Link>

            <div className="flex flex-col gap-y-2 bg-background rounded-lg p-3 overflow-x-clip text-ellipsis">
                <div className="flex flex-col items-center text-xl text-foreground/30">
                    <GitCommit size={28}/>
                    <div className="w-20 h-6 bg-foreground/20 rounded animate-pulse"></div>
                </div>

                <div className="flex items-center justify-center flex-wrap gap-1">
                    <div className="flex flex-col gap-y-1 items-center text-foreground/30">
                        <div className="w-10 h-6 bg-foreground/30 rounded animate-pulse"></div>
                        <Heart size={18}/>
                    </div>
                    <div className="flex flex-col gap-y-1 items-center text-foreground/30">
                        <div className="w-10 h-6 bg-foreground/30 rounded animate-pulse"></div>
                        <Heart size={18}/>
                    </div>
                    <div className="flex flex-col gap-y-1 items-center text-foreground/30">
                        <div className="w-10 h-6 bg-foreground/30 rounded animate-pulse"></div>
                        <Heart size={18}/>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-y-2">
                <div className="flex items-center justify-between bg-background p-3 rounded-lg">
                    <div className="flex items-center gap-1">
                        <div className="w-10 h-6 bg-foreground/30 rounded animate-pulse"></div>
                        <div className="w-18 h-5 bg-foreground/20 rounded animate-pulse"></div>
                    </div>
                    <div className="w-12 h-5 bg-foreground/20 rounded animate-pulse"></div>
                </div>
                <div className="flex items-center justify-between bg-background p-3 rounded-lg">
                    <div className="flex items-center gap-1">
                        <div className="w-10 h-6 bg-foreground/30 rounded animate-pulse"></div>
                        <div className="w-18 h-5 bg-foreground/20 rounded animate-pulse"></div>
                    </div>
                    <div className="w-12 h-5 bg-foreground/20 rounded animate-pulse"></div>
                </div>
                <div className="flex items-center justify-between bg-background p-3 rounded-lg">
                    <div className="flex items-center gap-1">
                        <div className="w-10 h-6 bg-foreground/30 rounded animate-pulse"></div>
                        <div className="w-18 h-5 bg-foreground/20 rounded animate-pulse"></div>
                    </div>
                    <div className="w-12 h-5 bg-foreground/20 rounded animate-pulse"></div>
                </div>
                <div className="flex items-center justify-between bg-background p-3 rounded-lg">
                    <div className="flex items-center gap-1">
                        <div className="w-10 h-6 bg-foreground/30 rounded animate-pulse"></div>
                        <div className="w-18 h-5 bg-foreground/20 rounded animate-pulse"></div>
                    </div>
                    <div className="w-12 h-5 bg-foreground/20 rounded animate-pulse"></div>
                </div>
                <div className="flex items-center justify-between bg-background p-3 rounded-lg">
                    <div className="flex items-center gap-1">
                        <div className="w-10 h-6 bg-foreground/30 rounded animate-pulse"></div>
                        <div className="w-18 h-5 bg-foreground/20 rounded animate-pulse"></div>
                    </div>
                    <div className="w-12 h-5 bg-foreground/20 rounded animate-pulse"></div>
                </div>
            </div>
        </div>
    )
}