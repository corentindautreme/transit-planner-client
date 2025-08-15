import { Metadata } from 'next';
import { LineAndDirectionsSign } from '@/app/(ui)/lines/components/line-and-direction-sign';
import { BusFront, Equal, TramFront } from 'lucide-react';
import { Suspense } from 'react';
import { Line } from '@/app/model/line';
import Link from 'next/link';
import { fetch } from '@/app/(ui)/utils/fetch';
import FavoriteSchedules from '@/app/(ui)/schedules/components/favorite-schedules';

export const metadata: Metadata = {
    title: 'Schedules'
};

export default async function Page() {
    const lines = await fetch(`${process.env.BACKEND_URL}/lines`).then(res => res.json()) as Line[];

    return (
        <Suspense fallback={'Loading...'}>
            <div className="flex flex-col gap-y-1">
                <FavoriteSchedules/>

                <div className="flex items-center gap-x-2 font-bold mb-1">
                    <TramFront size={18}/>
                    Tram
                </div>

                {lines
                    .filter(line => line.type == 'tram')
                    .sort((l1, l2) => l1.name.localeCompare(l2.name))
                    .map(line =>
                        <Link key={line.name} href={`/schedules/${line.name}`}>
                            <div className="bg-background p-3 rounded-lg">
                                <LineAndDirectionsSign
                                    name={line.name}
                                    type={line.type}
                                    directions={line.directions}
                                />
                            </div>
                        </Link>
                    )
                }

                <div className="flex items-center gap-x-2 font-bold my-1">
                    <div className="relative mt-0.5">
                        <BusFront size={18}/>
                        <div className="absolute h-2.5 w-4 -top-2 overflow-hidden">
                            <div className="absolute transform-[rotate(-90deg)]">
                                <Equal size={18} className="relative"/>
                            </div>
                        </div>
                    </div>
                    Trolleybus
                </div>

                {lines
                    .filter(line => line.type == 'trolleybus')
                    .sort((l1, l2) => l1.name.localeCompare(l2.name))
                    .map(line =>
                        <Link key={line.name} href={`/schedules/${line.name}`}>
                            <div className="bg-background p-3 rounded-lg">
                                <LineAndDirectionsSign
                                    name={line.name}
                                    type={line.type}
                                    directions={line.directions}
                                />
                            </div>
                        </Link>
                    )
                }

                <div className="flex items-center gap-x-2 font-bold mb-1">
                    <BusFront size={18}/>
                    Bus
                </div>

                {lines
                    .filter(line => line.type == 'bus')
                    .sort((l1, l2) => l1.name.localeCompare(l2.name))
                    .map(line =>
                        <Link key={line.name} href={`/schedules/${line.name}`}>
                            <div className="bg-background p-3 rounded-lg">
                                <LineAndDirectionsSign
                                    name={line.name}
                                    type={line.type}
                                    directions={line.directions}
                                />
                            </div>
                        </Link>
                    )
                }
            </div>
        </Suspense>
    );
}
