import { LineType } from '@/app/model/line-type';
import { clsx } from 'clsx';
import { Connection, ConnectionsByLineType, GroupedConnectionsStop } from '@/app/model/stop';
import { ConnectionLineSign, OneWayConnectionLineSign } from '@/app/(ui)/lines/components/line-and-direction-sign';
import { BusFront, ChevronDown, ChevronUp, Plane, TrainFront } from 'lucide-react';

function Connections({stopName, connections, align}: {
    stopName: string,
    connections: ConnectionsByLineType,
    align?: 'start' | 'end'
}) {
    return (
        <div className={clsx('w-full flex flex-wrap items-center gap-0.5',
            {
                'justify-end': align === 'end'
            }
        )}>
            {stopName.toLowerCase().includes('aerodrom') && (
                <div className="flex justify-center rounded p-1 font-bold bg-black text-white">
                    <Plane size={14}/>
                </div>
            )}
            {stopName.toLowerCase().includes('željeznička stanica') && (
                <div className="flex justify-center rounded p-1 font-bold bg-black text-white">
                    <TrainFront size={14}/>
                </div>
            )}
            {'tram' in connections && <ConnectionsList
                connections={connections['tram']}
                stopName={stopName}
            />}
            {'trolleybus' in connections && <ConnectionsList
                connections={connections['trolleybus']}
                stopName={stopName}
            />}
            {'bus' in connections && connections['bus'].some(c => c.line === '200E' && c.directions.some(d => d.toLowerCase().includes("aerodrom"))) &&
                <div className="flex items-center">
                    <div className="flex justify-center rounded font-bold border-2 border-black">
                        <BusFront size={15}/>
                    </div>
                    <div className="w-0.5 border-y-1 border-black"></div>
                    <div className="flex justify-center rounded p-0.5 font-bold bg-black text-white">
                        <Plane size={15}/>
                    </div>
                </div>}
            {'bus' in connections && (connections['bus'].length > 1 || connections['bus'][0].line !== '200E') &&
                <div className="flex justify-center rounded p-0.5 font-bold bg-sky-500 text-white">
                    <BusFront size={15}/>
                </div>}
        </div>
    );
}

function ConnectionsList({stopName, connections}: {
    stopName: string,
    connections: Connection[]
}) {
    return <>
        {connections.filter(c => c.directions.length > 1).length > 0
            && connections
                .filter(c => c.directions.length > 1)
                .map((c, index) => <ConnectionLineSign
                    key={`${stopName}-c-${index}`}
                    name={c.line}
                    type={c.type as LineType}
                />)
        }
        {connections.filter(c => c.directions.length == 1).length > 0
            && connections
                .filter(c => c.directions.length == 1)
                .map((c, index) => (<OneWayConnectionLineSign
                        key={`${stopName}-c-${index}`}
                        name={c.line}
                        type={c.type as LineType}
                        direction={c.directions[0]}
                    />
                ))}
    </>;
}

export function LineStop({name, type, connections, start, end, labelSide, oneWay}: {
    name: string,
    type: LineType,
    connections: ConnectionsByLineType,
    start: boolean,
    end: boolean,
    labelSide: 'left' | 'right',
    oneWay?: 'up' | 'down'
}) {
    return (
        <>
            <div className="flex gap-x-2 items-stretch">
                {labelSide == 'left'
                    ? <LeftLabelRightConnections
                        name={name}
                        type={type}
                        connections={connections}
                        start={start}
                        end={end}
                        oneWay={oneWay}
                    />
                    : <LeftConnectionsRightLabel
                        name={name}
                        type={type}
                        connections={connections}
                        start={start}
                        end={end}
                        oneWay={oneWay}/>
                }
            </div>
            {!end && <div className="flex justify-center">
                <div className={clsx('h-4 w-[4.8px]',
                    {
                        'bg-yellow-500': type == 'tram',
                        'bg-red-500': type == 'trolleybus',
                        'bg-sky-500': type == 'bus'
                    }
                )}></div>
            </div>}
        </>
    );
}

function LeftLabelRightConnections({name, type, connections, start, end, oneWay}: {
    name: string,
    type: LineType,
    connections: ConnectionsByLineType,
    start: boolean,
    end: boolean,
    oneWay?: 'up' | 'down'
}) {
    return (
        <>
            <div className="flex-1 flex gap-x-1 items-center justify-end text-right text-base/4 overflow-hidden">
                <div className="flex grow justify-end overflow-hidden">
                        <span className={clsx('overflow-hidden text-ellipsis',
                            {
                                'font-bold p-1 rounded': start || end,
                                'bg-yellow-500': (start || end) && type == 'tram',
                                'bg-red-500 text-white': (start || end) && type == 'trolleybus',
                                'bg-sky-500 text-white': (start || end) && type == 'bus'
                            }
                        )}>
                            {name}
                        </span>
                </div>
                {oneWay == 'down' &&
                    <div className={clsx('shrink-0 rounded-full',
                        {
                            'bg-yellow-500': type == 'tram',
                            'bg-red-500 text-white': type == 'trolleybus',
                            'bg-sky-500 text-white': type == 'bus'
                        }
                    )}>
                        <ChevronDown size={16}/>
                    </div>
                }
            </div>
            <div className="flex flex-col items-center">
                <div className={clsx('flex-1 shrink-0 w-[4.8px]', {
                    'bg-yellow-500': !start && type == 'tram',
                    'bg-red-500': !start && type == 'trolleybus',
                    'bg-sky-500': !start && type == 'bus',
                    'bg-transparent': start
                })}></div>
                <div className={clsx('rounded-full',
                    {
                        'border-3 w-4 h-4 ': start || end,
                        'border-2 bg-white w-3 h-3 ': Object.keys(connections).length == 0,
                        'border-yellow-500': type == 'tram',
                        'border-red-500': type == 'trolleybus',
                        'border-sky-500': type == 'bus',
                        'bg-yellow-500 w-3 h-3 ': Object.keys(connections).length > 0 && type == 'tram',
                        'bg-red-500 w-3 h-3 ': Object.keys(connections).length > 0 && type == 'trolleybus',
                        'bg-sky-500 w-3 h-3 ': Object.keys(connections).length > 0 && type == 'bus'
                    }
                )}></div>
                <div className={clsx('flex-1 shrink-0 w-[4.8px]', {
                    'bg-yellow-500': !end && type == 'tram',
                    'bg-red-500': !end && type == 'trolleybus',
                    'bg-sky-500': !end && type == 'bus',
                    'bg-transparent': end
                })}></div>
            </div>
            <div className="flex-1 flex items-center overflow-hidden">
                <Connections stopName={name} connections={connections}/>
            </div>
        </>
    );
}

function LeftConnectionsRightLabel({name, type, connections, start, end, oneWay}: {
    name: string,
    type: LineType,
    connections: ConnectionsByLineType,
    start: boolean,
    end: boolean,
    oneWay?: 'up' | 'down'
}) {
    return (
        <>
            <div className="flex-1 flex items-center justify-end overflow-hidden">
                <Connections stopName={name} connections={connections} align={'end'}/>
            </div>
            <div className="flex flex-col items-center">
                <div className={clsx('flex-1 shrink-0 w-[4.8px]', {
                    'bg-yellow-500': !start && type == 'tram',
                    'bg-red-500': !start && type == 'trolleybus',
                    'bg-sky-500': !start && type == 'bus',
                    'bg-transparent': start
                })}></div>
                <div className={clsx('rounded-full',
                    {
                        'border-yellow-500': type == 'tram',
                        'border-red-500': type == 'trolleybus',
                        'border-sky-500': type == 'bus',
                        'border-3 bg-white w-4 h-4 ': start || end,
                        'border-2 bg-white w-3 h-3 ': Object.keys(connections).length == 0,
                        'bg-yellow-500 w-3 h-3 ': Object.keys(connections).length > 0 && type == 'tram',
                        'bg-red-500 w-3 h-3 ': Object.keys(connections).length > 0 && type == 'trolleybus',
                        'bg-sky-500 w-3 h-3 ': Object.keys(connections).length > 0 && type == 'bus'
                    }
                )}></div>
                <div className={clsx('flex-1 shrink-0 w-[4.8px]', {
                    'bg-yellow-500': !end && type == 'tram',
                    'bg-red-500': !end && type == 'trolleybus',
                    'bg-sky-500': !end && type == 'bus',
                    'bg-transparent': end
                })}></div>
            </div>
            <div className="flex-1 flex gap-x-1 items-center text-base/4 overflow-hidden">
                {oneWay == 'up' &&
                    <div className={clsx('shrink-0 rounded-full',
                        {
                            'bg-yellow-500': type == 'tram',
                            'bg-red-500 text-white': type == 'trolleybus',
                            'bg-sky-500 text-white': type == 'bus'
                        }
                    )}>
                        <ChevronUp size={16}/>
                    </div>
                }
                <div className="flex grow overflow-hidden">
                    <span className={clsx('overflow-hidden text-ellipsis',
                        {
                            'font-bold p-1 rounded': start || end,
                            'bg-yellow-500': (start || end) && type == 'tram',
                            'bg-red-500 text-white': (start || end) && type == 'trolleybus',
                            'bg-sky-500 text-white': (start || end) && type == 'bus'
                        }
                    )}>
                        {name}
                    </span>
                </div>
            </div>
        </>
    );
}

function JunctionLineStop({name, type, connections, end, oneWay}: {
    name: string,
    type: LineType,
    connections: ConnectionsByLineType,
    end: boolean,
    oneWay: 'up' | 'down'
}) {
    return (
        <>
            <div className="flex flex-col">
                <div className="flex gap-x-2 justify-end">
                    <div className={clsx({
                        'flex-4': oneWay == 'down',
                        'flex-1': oneWay == 'up'
                    })}></div>
                    <div className="flex flex-col w-3 items-center">
                        <div className={clsx('h-2 w-[4.8px]',
                            {
                                'bg-yellow-500': type == 'tram',
                                'bg-red-500': type == 'trolleybus',
                                'bg-sky-500': type == 'bus'
                            }
                        )}></div>
                    </div>
                    <div className={clsx({
                        'flex-1': oneWay == 'down',
                        'flex-4': oneWay == 'up'
                    })}></div>
                </div>
                {/* Label and stop icon */}
                <div className="flex gap-x-2 items-stretch">
                    {oneWay == 'down' ? (
                        <div
                            className="flex-4 flex flex-col gap-y-1 text-right text-base/4 overflow-hidden">
                            <div className="flex grow justify-end overflow-hidden">
                            <span className="overflow-hidden text-ellipsis">
                                {name}
                            </span>
                            </div>
                        </div>
                    ) : (
                        <div className="flex-1 flex items-center"></div>
                    )}

                    <div className="flex flex-col items-center">
                        <div className={clsx('flex-1 shrink-0',
                            {
                                'w-[4.8px]': true,
                                'bg-yellow-500': type == 'tram',
                                'bg-red-500': type == 'trolleybus',
                                'bg-sky-500': type == 'bus'
                            }
                        )}></div>
                        <div className={clsx('rounded-full',
                            {
                                'border-2 bg-white w-3 h-3 ': Object.keys(connections).length == 0,
                                'bg-yellow-500 w-3 h-3 ': Object.keys(connections).length > 0 && type == 'tram',
                                'bg-red-500 w-3 h-3 ': Object.keys(connections).length > 0 && type == 'trolleybus',
                                'bg-sky-500 w-3 h-3 ': Object.keys(connections).length > 0 && type == 'bus',
                                'border-yellow-500': type == 'tram',
                                'border-red-500': type == 'trolleybus',
                                'border-sky-500': type == 'bus'
                            }
                        )}></div>
                        <div className={clsx('flex-1 shrink-0 w-[4.8px]',
                            {
                                'bg-yellow-500': type == 'tram',
                                'bg-red-500': type == 'trolleybus',
                                'bg-sky-500': type == 'bus'
                            }
                        )}></div>
                    </div>

                    {oneWay == 'up' ? (
                        <div
                            className="flex-4 flex flex-col gap-y-1 text-base/4 overflow-hidden">
                            <div className="flex grow overflow-hidden">
                            <span className="overflow-hidden text-ellipsis">
                                {name}
                            </span>
                            </div>
                        </div>
                    ) : (
                        <div className="flex-1 flex items-center"></div>
                    )}
                </div>

                {/* Connections */}
                {Object.keys(connections).length > 0 &&
                    <div className="flex gap-x-2 items-stretch">
                        {oneWay == 'down' ? (
                            <div className="flex-4 py-1 overflow-hidden">
                                <Connections stopName={name} connections={connections} align={'end'}/>
                            </div>
                        ) : (
                            <div className="flex-1 flex items-center"></div>
                        )}

                        <div className="flex flex-col w-3 items-center">
                            <div className={clsx('flex-1 shrink-0 w-[4.8px]',
                                {
                                    'bg-yellow-500': type == 'tram',
                                    'bg-red-500': type == 'trolleybus',
                                    'bg-sky-500': type == 'bus'
                                }
                            )}></div>
                        </div>

                        {oneWay == 'up' ? (
                            <div className="flex-4 py-1 overflow-hidden">
                                <Connections stopName={name} connections={connections}/>
                            </div>
                        ) : (
                            <div className="flex-1 flex items-center"></div>
                        )}
                    </div>
                }

                {!end &&
                    <div className="flex gap-x-2 justify-end">
                        <div className={clsx({
                            'flex-4': oneWay == 'down',
                            'flex-1': oneWay == 'up'
                        })}></div>
                        <div className="flex flex-col w-3 items-center">
                            <div className={clsx('h-2 w-[4.8px]',
                                {
                                    'bg-yellow-500': type == 'tram',
                                    'bg-red-500': type == 'trolleybus',
                                    'bg-sky-500': type == 'bus'
                                }
                            )}></div>
                        </div>
                        <div className={clsx({
                            'flex-1': oneWay == 'down',
                            'flex-4': oneWay == 'up'
                        })}></div>
                    </div>
                }
            </div>

            {!end &&
                <div className="grow flex gap-x-2 justify-end">
                    <div className={clsx({
                        'flex-4': oneWay == 'down',
                        'flex-1': oneWay == 'up'
                    })}></div>
                    <div className="flex flex-col w-3 items-center">
                        <div className={clsx('h-full w-[4.8px]',
                            {
                                'bg-yellow-500': type == 'tram',
                                'bg-red-500': type == 'trolleybus',
                                'bg-sky-500': type == 'bus'
                            }
                        )}></div>
                    </div>
                    <div className={clsx({
                        'flex-1': oneWay == 'down',
                        'flex-4': oneWay == 'up'
                    })}></div>
                </div>
            }
        </>
    );
}

export function Junction({segments, type}: {
    segments: GroupedConnectionsStop[][],
    type: LineType
}) {
    return <>
        {/* Top visual segment */}
        <div className="flex">
            <div className="flex w-[50%]">
                <div className="flex-4"></div>
                <div className="w-2"></div>
                <div className="flex flex-col w-3 items-center">
                    <div
                        className={clsx('mr-[-7.6px] w-3 rounded-tl-xl border-t-[4.8px] border-l-[4.8px] h-6',
                            {
                                'border-yellow-500': type == 'tram',
                                'border-red-500': type == 'trolleybus',
                                'border-sky-500': type == 'bus'
                            }
                        )}></div>
                    <div className={clsx('w-5 h-5 rounded-full text-white',
                        {
                            'bg-yellow-500': type == 'tram',
                            'bg-red-500 text-white': type == 'trolleybus',
                            'bg-sky-500': type == 'bus'
                        }
                    )}>
                        <ChevronDown size={20}/>
                    </div>
                    <div className={clsx('w-[4.8px] h-4',
                        {
                            'bg-yellow-500': type == 'tram',
                            'bg-red-500': type == 'trolleybus',
                            'bg-sky-500': type == 'bus'
                        }
                    )}></div>
                </div>
                <div className={clsx('w-2 rounded-tl border-t-[4.8px] h-6',
                    {
                        'border-yellow-500': type == 'tram',
                        'border-red-500': type == 'trolleybus',
                        'border-sky-500': type == 'bus'
                    }
                )}></div>
                <div className={clsx('flex-1 border-t-[4.8px] h-6',
                    {
                        'border-yellow-500': type == 'tram',
                        'border-red-500': type == 'trolleybus',
                        'border-sky-500': type == 'bus'
                    }
                )}></div>
            </div>
            <div className="flex w-[50%]">
                <div className={clsx('flex-1 border-t-[4.8px] h-6',
                    {
                        'border-yellow-500': type == 'tram',
                        'border-red-500': type == 'trolleybus',
                        'border-sky-500': type == 'bus'
                    }
                )}></div>
                <div className={clsx('w-2 rounded-tr border-t-[4.8px] h-6',
                    {
                        'border-yellow-500': type == 'tram',
                        'border-red-500': type == 'trolleybus',
                        'border-sky-500': type == 'bus'
                    }
                )}></div>
                <div className="flex flex-col w-3 items-center">
                    <div
                        className={clsx('ml-[-7.6px] w-3 rounded-tr-xl border-t-[4.8px] border-r-[4.8px] h-6',
                            {
                                'border-yellow-500': type == 'tram',
                                'border-red-500': type == 'trolleybus',
                                'border-sky-500': type == 'bus'
                            }
                        )}></div>
                    <div className={clsx('w-5 h-5 rounded-full text-white',
                        {
                            'bg-yellow-500': type == 'tram',
                            'bg-red-500 text-white': type == 'trolleybus',
                            'bg-sky-500 text-white': type == 'bus'
                        }
                    )}>
                        <ChevronUp size={20}/>
                    </div>
                    <div className={clsx('w-[4.8px] h-4',
                        {
                            'bg-yellow-500': type == 'tram',
                            'bg-red-500': type == 'trolleybus',
                            'bg-sky-500': type == 'bus'
                        }
                    )}></div>
                </div>
                <div className="w-2"></div>
                <div className="flex-4"></div>
            </div>
        </div>
        <div className="flex items-stretch">
            {segments.reverse().map((segment, segmentIndex) => (
                <div
                    key={`segment-${segment[0].name.slice(0, 3)}-${segment[segment.length - 1].name.slice(0, 3)}`}
                    className="w-[50%] flex flex-col justify-between"
                >
                    {segment.reverse().map((stop, index) => (
                        <JunctionLineStop
                            key={stop.name}
                            name={stop.name}
                            type={type}
                            connections={stop.connections}
                            end={index == segment.length - 1}
                            oneWay={segmentIndex == 0 ? 'down' : 'up'}
                        />
                    ))}
                </div>
            ))}
        </div>
        {/* Bottom visual segment */}
        <div className="flex">
            <div className="flex w-[50%] items-end">
                <div className="flex-4"></div>
                <div className="w-2"></div>
                <div className="flex flex-col w-3 items-center">
                    <div className={clsx('w-[4.8px] h-4',
                        {
                            'bg-yellow-500': type == 'tram',
                            'bg-red-500': type == 'trolleybus',
                            'bg-sky-500': type == 'bus'
                        }
                    )}></div>
                    <div className={clsx('w-5 h-5 rounded-full text-white',
                        {
                            'bg-yellow-500': type == 'tram',
                            'bg-red-500': type == 'trolleybus',
                            'bg-sky-500': type == 'bus'
                        }
                    )}>
                        <ChevronDown size={20}/>
                    </div>
                    <div
                        className={clsx('mr-[-7.6px] w-3 rounded-bl-xl border-b-[4.8px] border-l-[4.8px] h-6',
                            {
                                'border-yellow-500': type == 'tram',
                                'border-red-500': type == 'trolleybus',
                                'border-sky-500': type == 'bus'
                            }
                        )}></div>
                </div>
                <div className={clsx('w-2 rounded-bl border-b-[4.8px] h-6',
                    {
                        'border-yellow-500': type == 'tram',
                        'border-red-500': type == 'trolleybus',
                        'border-sky-500': type == 'bus'
                    }
                )}></div>
                <div className={clsx('flex-1 border-b-[4.8px] h-6',
                    {
                        'border-yellow-500': type == 'tram',
                        'border-red-500': type == 'trolleybus',
                        'border-sky-500': type == 'bus'
                    }
                )}></div>
            </div>
            <div className="flex w-[50%] items-end">
                <div className={clsx('flex-1 border-b-[4.8px] h-6',
                    {
                        'border-yellow-500': type == 'tram',
                        'border-red-500': type == 'trolleybus',
                        'border-sky-500': type == 'bus'
                    }
                )}></div>
                <div className={clsx('w-2 rounded-tr border-b-[4.8px] h-6',
                    {
                        'border-yellow-500': type == 'tram',
                        'border-red-500': type == 'trolleybus',
                        'border-sky-500': type == 'bus'
                    }
                )}></div>
                <div className="flex flex-col w-3 items-center">
                    <div className={clsx('w-[4.8px] h-4',
                        {
                            'bg-yellow-500': type == 'tram',
                            'bg-red-500': type == 'trolleybus',
                            'bg-sky-500': type == 'bus'
                        }
                    )}></div>
                    <div className={clsx('w-5 h-5 rounded-full text-white',
                        {
                            'bg-yellow-500': type == 'tram',
                            'bg-red-500': type == 'trolleybus',
                            'bg-sky-500': type == 'bus'
                        }
                    )}>
                        <ChevronUp size={20}/>
                    </div>
                    <div
                        className={clsx('ml-[-7.6px] w-3 rounded-br-xl border-b-[4.8px] border-r-[4.8px] h-6',
                            {
                                'border-yellow-500': type == 'tram',
                                'border-red-500': type == 'trolleybus',
                                'border-sky-500': type == 'bus'
                            }
                        )}></div>
                </div>
                <div className="w-2"></div>
                <div className="flex-4"></div>
            </div>
        </div>
        <div className="flex flex-col items-center">
            <div className={clsx('border-x-3 h-3',
                {
                    'border-yellow-500': type == 'tram',
                    'border-red-500': type == 'trolleybus',
                    'border-sky-500': type == 'bus'
                }
            )}></div>
        </div>
    </>;
}