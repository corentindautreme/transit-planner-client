import { clsx } from 'clsx';
import { LineType } from '@/app/model/line-type';
import { MoveRight, Plane, TrainFront } from 'lucide-react';
import { shortenStopName } from '@/app/(ui)/utils/text-utils';

export function LineSign({name, type}: { name: string; type: LineType }) {
    return <div className={clsx('shrink-0 rounded w-10 text-center font-bold',
        {
            'bg-yellow-500': type === 'tram',
            'bg-red-500 text-white': type === 'trolleybus',
            'bg-sky-500 text-white': type === 'bus'
        }
    )}>
        {name}
    </div>;
}

export function LineAndDirectionSign({name, type, direction}: {
    name: string;
    type: LineType,
    direction: string
}) {
    return (
        <div className="flex gap-x-1 items-center">
            <LineSign name={name} type={type}/>
            <div className="text-base/4">{direction}</div>
        </div>
    )
}

function SignificantSign({stop}: { stop: string }) {
    if (stop.toLowerCase().includes('aerodrom')) {
        return (
            <div className="inline-flex ms-0.5 bg-black rounded text-white p-0.5">
                <Plane size={14}/>
            </div>
        );
    } else if (stop.toLowerCase().includes('željeznička stanica')) {
        return (
            <div className="inline-flex ms-0.5 bg-black rounded text-white p-0.5">
                <TrainFront size={14}/>
            </div>
        );
    }
}

export function LineAndDirectionsSign({name, type, directions}: {
    name: string;
    type: LineType,
    directions: string[]
}) {
    return (
        <div className="flex gap-x-1 items-center">
            <LineSign name={name} type={type}/>
            <div className="text-base/4">{directions[0]}<SignificantSign
                stop={directions[0]}/> – {directions[1]}<SignificantSign stop={directions[1]}/></div>
        </div>
    )
}

export function LineFromDirectionSign({name, type, from, direction}: {
    name: string;
    type: LineType,
    from: string,
    direction: string
}) {
    return (
        <div className="flex gap-x-1 items-center">
            <div className="shrink-0">
                <LineSign name={name} type={type}/>
            </div>
            <div className="flex items-center gap-x-1 overflow-hidden">
                <div className="text-center text-base/4">{from}</div>
                <MoveRight className="shrink-0"/>
                <div className="text-center text-base/4">{direction}</div>
            </div>
        </div>
    )
}

export function ConnectionLineSign({name, type}: { name: string, type: LineType }) {
    return (
        <div className={clsx('rounded w-8 text-xs py-0.5 text-center font-bold',
            {
                'bg-yellow-500': type === 'tram',
                'bg-red-500 text-white': type === 'trolleybus',
                'bg-sky-500 text-white': type === 'bus'
            }
        )}>
            {name}
        </div>
    )
}

export function OneWayConnectionLineSign({name, type, direction}: {
    name: string,
    type: LineType,
    direction: string
}) {
    return (
        <div className="flex overflow-hidden">
            <div className={clsx('flex items-center rounded overflow-hidden',
                {
                    'bg-yellow-500/50': type === 'tram',
                    'bg-red-500/50': type === 'trolleybus',
                    'bg-sky-500/50': type === 'bus'
                }
            )}>
                <div className={clsx('shrink-0 rounded w-8 text-xs py-0.5 text-center font-bold',
                    {
                        'bg-yellow-500': type === 'tram',
                        'bg-red-500 text-white': type === 'trolleybus',
                        'bg-sky-500 text-white': type === 'bus'
                    }
                )}>
                    {name}
                </div>
                <div className="grow text-xs text-nowrap overflow-hidden text-ellipsis px-0.5">
                    {shortenStopName(direction)}
                </div>
            </div>
        </div>
    )
}