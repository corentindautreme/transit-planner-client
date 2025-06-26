import { clsx } from 'clsx';
import { LineType } from '@/app/model/line-type';

export function LineSign({name, type}: {name: string; type: LineType}) {
    return <div className={clsx('rounded w-10 text-center font-bold',
        {
            'bg-yellow-500': type === 'tram',
            'bg-red-500 text-white': type === 'trolleybus',
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
                    'bg-red-500/50': type === 'trolleybus'
                }
            )}>
                <div className={clsx('shrink-0 rounded w-8 text-xs text-center font-bold',
                    {
                        'bg-yellow-500': type === 'tram',
                        'bg-red-500 text-white': type === 'trolleybus'
                    }
                )}>
                    {name}
                </div>
                <div className="grow text-xs text-nowrap overflow-hidden text-ellipsis px-0.5">
                    {direction.split(' ')
                        .filter(s => s.charAt(0) === s.charAt(0).toUpperCase())
                        .map((s, index) => (index == 0 ? `${s.slice(0, 3)}` : `${s.charAt(0)}`) + (s.length > 1 ? '.' : ''))
                        .join(' ')
                    }
                </div>
            </div>
        </div>
    )
}