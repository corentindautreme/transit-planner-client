import { Metadata } from 'next';
import { LineAndDirectionSign } from '@/app/(ui)/lines/components/line-and-direction-sign';
import { BusFront, Equal, TramFront } from 'lucide-react';
import { Suspense } from 'react';
import { Line } from '@/app/model/line';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Lines'
};

export default async function Page() {
    const lines = await fetch(`${process.env.BACKEND_URL}/lines`).then(res => res.json()) as Line[];

    return (
        <Suspense fallback={'Loading...'}>
            <div className="flex flex-col gap-y-1">
                <div className="flex mx-auto items-center gap-x-2 font-bold mb-1">
                    Tram
                    <div className="p-2 rounded-full bg-yellow-500">
                        <TramFront size={18}/>
                    </div>
                </div>

                {lines
                    .filter(line => line.type == 'tram')
                    .sort((l1, l2) => l1.name.localeCompare(l2.name))
                    .map(line =>
                        <Link key={line.name} href={`/lines/${line.name}`}>
                            <LineAndDirectionSign
                                name={line.name}
                                type={line.type}
                                direction={line.directions.join(' – ')}
                            />
                        </Link>
                    )}

                <div className="flex mx-auto items-center gap-x-2 font-bold mb-1">
                    Trolleybus
                    <div className="p-2 pb-1.5 rounded-full bg-red-500 text-white">
                        <div className="relative mt-0.5">
                            <BusFront size={18} className="bg-red-500"/>
                            <div className="absolute h-2.5 w-4 -top-2 overflow-hidden">
                                <div className="absolute transform-[rotate(-90deg)]">
                                    <Equal size={18} className="relative"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {lines
                    .filter(line => line.type == 'trolleybus')
                    .sort((l1, l2) => l1.name.localeCompare(l2.name))
                    .map(line =>
                        <Link key={line.name} href={`/lines/${line.name}`}>
                            <LineAndDirectionSign
                                name={line.name}
                                type={line.type}
                                direction={line.directions.join(' – ')}
                            />
                        </Link>
                    )}
            </div>
        </Suspense>
    );
}
