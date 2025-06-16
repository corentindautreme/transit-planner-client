import { clsx } from 'clsx';
import { LineType } from '@/app/model/line-type';

export function LineSign({name, type, direction}: {
    name: string;
    type: LineType,
    direction: string
}) {
    return (
        <div className="flex gap-x-1 items-center">
            <div className={clsx('rounded w-10 text-center font-bold',
                {
                    'bg-yellow-500': type === 'tram',
                    'bg-red-500 text-white': type === 'trolleybus',
                }
            )}>
                {name}
            </div>
            <div className="">{direction}</div>
        </div>
    )
}

export function ConnectionLineSign({name, type}: { name: string, type: LineType }) {
    return (
        <div className={clsx('rounded w-8 text-xs text-center font-bold',
            {
                'bg-yellow-500': type === 'tram',
                'bg-red-500 text-white': type === 'trolleybus',
            }
        )}>
            {name}
        </div>
    )
}

export function OneWayConnectionLineSign({name, type, direction, align}: {
    name: string,
    type: LineType,
    direction: string,
    align?: 'start' | 'end'
}) {
    return (
        <div className="flex overflow-hidden">
            {align == 'end' && <div className="grow"></div>}
            <div className={clsx('flex items-center rounded border-t-2 border-b-2 border-e-2 overflow-hidden',
                {
                    'border-yellow-500': type === 'tram',
                    'border-red-500': type === 'trolleybus'
                }
            )}>
                <div className=""></div>
                <div className={clsx('shrink-0 rounded w-8 text-xs text-center font-bold',
                    {
                        'bg-yellow-500': type === 'tram',
                        'bg-red-500 text-white': type === 'trolleybus'
                    }
                )}>
                    {name}
                </div>
                <div className="grow text-xs text-nowrap overflow-hidden text-ellipsis px-0.5">{direction}</div>
            </div>
        </div>
    )
}