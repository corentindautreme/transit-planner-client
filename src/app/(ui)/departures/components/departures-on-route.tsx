'use client';

import { StopAndRouteDeparture } from '@/app/model/stop';
import { useState } from 'react';
import { LeftLabelRightName } from '@/app/(ui)/lines/components/line-stop';
import { clsx } from 'clsx';
import { LineType } from '@/app/model/line-type';

export default function DeparturesOnRoute({currentStop, type, loadedDepartures}: {
    currentStop: number,
    type: LineType,
    loadedDepartures: StopAndRouteDeparture[]
}) {
    const currentStopIndex = loadedDepartures.findIndex(d => d.id == currentStop);
    const hasPrevious = currentStopIndex > 0;
    const [departures, setDepartures] = useState(loadedDepartures.slice(currentStopIndex));
    const [showPrevious, setShowPrevious] = useState(false);

    const displayPrevious = () => {
        setDepartures(loadedDepartures);
        setShowPrevious(true);
    }

    return (
        <div className="flex flex-col">
            {hasPrevious && !showPrevious && <div className={clsx('flex items-center gap-3 h-10')}>
                <div className="flex-1"></div>
                <div className="h-full w-4 flex flex-col items-center">
                    <div className={clsx('grow w-[4.8px] bg-radial from-50% to-transparent to-50% [background-size:16px_13px] bg-center', {
                        'from-yellow-500 border-yellow-500': type == 'tram',
                        'from-red-500 border-red-500': type == 'trolleybus',
                        'from-sky-500 border-sky-500': type == 'bus'
                    })}></div>
                </div>
                <button onClick={() => displayPrevious()} className="flex-4 text-sm/4 text-start italic py-4 cursor-pointer">
                    Show previous stops
                </button>
            </div>}
            {departures.map(d =>
                <LeftLabelRightName
                    key={d.id}
                    label={new Date(d.departures[0].scheduledAt).toLocaleString('bs-BA', {timeStyle: 'short'})}
                    name={d.name}
                    type={type}
                    start={d.id == loadedDepartures[0].id}
                    end={d.id == loadedDepartures[loadedDepartures.length - 1].id}
                    highlight={currentStop == d.id}
                    faded={d.departures[0].previous}
                />
            )}
        </div>
    );
}