import { DeparturesAtStop } from '@/app/model/departures';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { Suspense } from 'react';
import DeparturesTable from '@/app/(ui)/schedules/components/departures-table';
import { fetch } from '@/app/(ui)/utils/fetch';

export default async function Page(props: { params: Promise<{ line: string, stopId: number }>; }) {
    const params = await props.params;
    const lineName = params.line;
    const stopId = params.stopId;

    const departures = await fetch(`${process.env.BACKEND_URL}/departures/scheduled?from=${stopId}&line=${lineName}`).then(res => res.json()) as DeparturesAtStop;
    console.log(departures);

    return (
        <div className="h-full flex flex-col gap-3">
            <Link className="w-fit flex items-center gap-x-1" href={`/schedules/${lineName}`}><ChevronLeft/>Back</Link>
            <Suspense fallback={'Loading...'}>
                <DeparturesTable line={lineName} departuresAtStop={departures}/>
            </Suspense>
        </div>
    );
}