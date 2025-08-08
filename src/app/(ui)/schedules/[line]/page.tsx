import { DescribedLine } from '@/app/model/line';
import { Suspense } from 'react';
import Link from 'next/link';
import { clsx } from 'clsx';
import { LineSign } from '@/app/(ui)/lines/components/line-and-direction-sign';
import { ChevronLeft } from 'lucide-react';
import { fetch } from '@/app/(ui)/utils/fetch';

export default async function Page(props: { params: Promise<{ line: string }>; }) {
    const params = await props.params;
    const lineName = params.line;

    const line = await fetch(`${process.env.BACKEND_URL}/lines/describe-line?name=${lineName}`).then(res => res.json()) as DescribedLine;
    const stops = [
        ...line.routes[0].stops.slice(0, line.routes[0].stops.length - 1),
        ...line.routes[1].stops.filter(s => !line.routes[0].stops.some(stop => s.id === stop.id)).toReversed(),
        line.routes[0].stops[line.routes[0].stops.length - 1]
    ];

    return (
        <div className="flex flex-col gap-1">
            <Link className="w-fit flex items-center gap-x-1" href="/schedules"><ChevronLeft/>Back</Link>
            <div className="text-center my-2">
                Select a stop to view the schedule for line <LineSign name={line.name} type={line.type} inline={true}/> at
                that stop
            </div>
            <Suspense fallback={'Loading...'}>
                {stops.map((stop, index) =>
                    <Link key={stop.id} href={`/schedules/${line.name}/${stop.id}`}>
                        <div className={clsx('bg-background p-3 rounded-lg',
                            {'font-bold': index === 0 || index === stops.length - 1}
                        )}>
                            {stop.name}
                        </div>
                    </Link>
                )}
            </Suspense>
        </div>
    );
}