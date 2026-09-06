import { clsx } from 'clsx';

export default function Stop({direction, name, type, lines, terminus, row, col, labelPos}: {
    direction?: 'horizontal' | 'vertical',
    name: string,
    type: 'tram' | 'trolley' | 'bus',
    lines?: string[],
    terminus?: 'bottom' | 'top' | 'right' | 'left',
    row: number,
    col: number,
    labelPos?: 'bottom' | 'top' | 'right' | 'left',
}) {
    return direction === 'vertical' ? VerticalStop({
        name,
        type,
        lines,
        terminus,
        row,
        col,
        labelPos: (labelPos === 'bottom' || labelPos === 'top' ? undefined : labelPos)
    }) : HorizontalStop({
        name,
        type,
        lines,
        terminus,
        row,
        col,
        labelPos: (labelPos === 'right' || labelPos === 'left' ? undefined : labelPos)
    });
}

function HorizontalStop({name, type, lines, terminus, row, col, labelPos}: {
    name: string,
    type: 'tram' | 'trolley' | 'bus',
    lines?: string[],
    terminus?: 'bottom' | 'top' | 'right' | 'left',
    row: number,
    col: number,
    labelPos?: 'bottom' | 'top',
}) {
    const hasLines = lines !== undefined && lines.length > 0;

    return (
        <div
            className="flex flex-col gap-1 items-center justify-center"
            style={{
                gridRowStart: row,
                gridRowEnd: row + 1,
                gridColumnStart: col,
                gridColumnEnd: col + 1,
            }}
        >
            {/* Station name / station signs */}
            {(!labelPos || labelPos === 'top') &&
                <div className="min-h-0 flex-1/2 flex flex-col items-center justify-end">
                    <div className={clsx('w-full min-w-max text-base/5 text-center whitespace-pre-line',
                        {
                            'px-1 py-0.5 font-bold rounded-lg': hasLines,
                            'bg-yellow-500': hasLines && type === 'tram',
                            'bg-red-500 text-white': hasLines && type === 'trolley',
                            'bg-sky-500': hasLines && type === 'bus'
                        }
                    )}>{name}</div>
                </div>
            }
            {labelPos === 'bottom' &&
                <div className="min-h-0 flex-1/2 flex items-end justify-center">
                    <div className="flex items-center gap-1 justify-center">
                        {hasLines && lines.map(line => (
                            <div key={`${name}-line-${line}`}
                                 className={clsx('shrink-0 text-center rounded text-lg font-bold',
                                     {
                                         'bg-yellow-500 w-5': type === 'tram',
                                         'bg-red-500 text-white w-10': type === 'trolley',
                                         'bg-sky-500 w-10': type === 'bus'
                                     }
                                 )}>{line}</div>
                        ))}
                    </div>
                </div>
            }
            {/* Marker */}
            <div className="w-full flex items-center gap-0.5">
                <div className={clsx('flex-1 rounded-e-xl',
                    {
                        'h-1': terminus !== 'left',
                        'bg-yellow-500': type === 'tram',
                        'bg-red-500': type === 'trolley',
                        'bg-sky-500': type === 'bus'
                    }
                )}></div>
                <div className={clsx('size-2 rounded-full',
                    {
                        'bg-yellow-500': type === 'tram',
                        'bg-red-500': type === 'trolley',
                        'bg-sky-500': type === 'bus'
                    }
                )}></div>
                <div className={clsx('flex-1 rounded-s-xl',
                    {
                        'h-1': terminus !== 'right',
                        'bg-yellow-500': type === 'tram',
                        'bg-red-500': type === 'trolley',
                        'bg-sky-500': type === 'bus'
                    }
                )}></div>
            </div>
            {/* Station signs / station name */}
            {labelPos === 'bottom' &&
                <div className="min-h-0 flex-1/2 flex flex-col items-center justify-start">
                    <div className={clsx('w-full min-w-max text-base/5 text-center whitespace-pre-line',
                        {
                            'px-1 py-0.5 font-bold rounded-lg': hasLines,
                            'bg-yellow-500': hasLines && type === 'tram',
                            'bg-red-500 text-white': hasLines && type === 'trolley',
                            'bg-sky-500': hasLines && type === 'bus'
                        }
                    )}>{name}</div>
                </div>
            }
            {(!labelPos || labelPos === 'top') &&
                <div className="min-h-0 flex-1/2 flex items-start justify-center">
                    <div className="flex items-center gap-1 justify-center">
                        {hasLines && lines.map(line => (
                            <div key={`${name}-line-${line}`}
                                 className={clsx('shrink-0 text-center rounded text-lg font-bold',
                                     {
                                         'bg-yellow-500 w-5': type === 'tram',
                                         'bg-red-500 text-white w-10': type === 'trolley',
                                         'bg-sky-500 w-10': type === 'bus'
                                     }
                                 )}>{line}</div>
                        ))}
                    </div>
                </div>
            }
        </div>
    );
}

function VerticalStop({name, type, lines, terminus, row, col, labelPos}: {
    name: string,
    type: 'tram' | 'trolley' | 'bus',
    lines?: string[],
    terminus?: 'bottom' | 'top' | 'right' | 'left',
    row: number,
    col: number,
    labelPos?: 'right' | 'left',
}) {
    const hasLines = lines !== undefined && lines.length > 0;

    return (
        <div
            className="flex gap-1 items-center justify-center"
            style={{
                gridRowStart: row,
                gridRowEnd: row + 1,
                gridColumnStart: col,
                gridColumnEnd: col + 1,
            }}
        >
            {/* Station name / station signs */}
            {(!labelPos || labelPos === 'left') &&
                <div className="min-w-0 flex-1/2 flex justify-end">
                    <div className={clsx('w-full min-w-max text-center',
                        {
                            'px-1 py-0.5 font-bold rounded-lg': hasLines,
                            'bg-yellow-500': hasLines && type === 'tram',
                            'bg-red-500 text-white': hasLines && type === 'trolley',
                            'bg-sky-500': hasLines && type === 'bus'
                        }
                    )}>{name}</div>
                </div>
            }
            {labelPos === 'right' &&
                <div className="min-w-0 flex-1/2 flex justify-end">
                    <div className="flex items-center gap-1 justify-center">
                        {hasLines && lines.map(line => (
                            <div
                                key={`${name}-line-${line}`}
                                className={clsx('shrink-0 text-center rounded text-lg font-bold',
                                    {
                                        'bg-yellow-500 w-5': type === 'tram',
                                        'bg-red-500 text-white w-10': type === 'trolley',
                                        'bg-sky-500 w-10': type === 'bus'
                                    }
                                )}>{line}</div>
                        ))}
                    </div>
                </div>
            }
            {/* Marker */}
            <div className="h-full flex flex-col items-center gap-0.5">
                <div className={clsx('flex-1 rounded-b-xl',
                    {
                        'w-1': terminus !== 'top',
                        'bg-yellow-500': type === 'tram',
                        'bg-red-500': type === 'trolley',
                        'bg-sky-500': type === 'bus'
                    }
                )}></div>
                <div className={clsx('size-2 rounded-full',
                    {
                        'bg-yellow-500': type === 'tram',
                        'bg-red-500': type === 'trolley',
                        'bg-sky-500': type === 'bus'
                    }
                )}></div>
                <div className={clsx('flex-1 rounded-t-xl',
                    {
                        'w-1': terminus !== 'bottom',
                        'bg-yellow-500': type === 'tram',
                        'bg-red-500': type === 'trolley',
                        'bg-sky-500': type === 'bus'
                    }
                )}></div>
            </div>
            {/* Station signs / station name */}
            {(!labelPos || labelPos === 'left') &&
                <div className="min-w-0 flex-1/2 flex">
                    <div className="flex items-center gap-1 justify-center">
                        {hasLines && lines.map(line => (
                            <div
                                key={`${name}-line-${line}`}
                                className={clsx('shrink-0 text-center rounded text-lg font-bold',
                                    {
                                        'bg-yellow-500 w-5': type === 'tram',
                                        'bg-red-500 text-white w-10': type === 'trolley',
                                        'bg-sky-500 w-10': type === 'bus'
                                    }
                                )}>{line}</div>
                        ))}
                    </div>
                </div>
            }
            {labelPos === 'right' &&
                <div className="min-w-0 flex-1/2 flex">
                    <div className={clsx('w-full min-w-max text-center',
                        {
                            'px-1 py-0.5 font-bold rounded-lg': hasLines,
                            'bg-yellow-500': hasLines && type === 'tram',
                            'bg-red-500': hasLines && type === 'trolley',
                            'bg-sky-500': hasLines && type === 'bus'
                        }
                    )}>{name}</div>
                </div>
            }
        </div>
    )
}