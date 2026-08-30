import { clsx } from 'clsx';
import { Fragment } from 'react';

export default function Page() {
    return (
        <div className="h-full bg-white rounded-xl py-3 px-1 overflow-scroll">
            <div className="grid grid-cols-[repeat(20,_40px)] grid-rows-[repeat(5,_40px)_30px_40px_30px_repeat(5,_40px)]">

                {/* Main track */}
                <div className="row-start-3 row-end-4 col-start-3 col-end-4 flex items-center">
                    <div className="h-1 w-full bg-yellow-500"></div>
                </div>

                {/* Bottom fork to 2-fork subfork */}
                <div className="row-start-3 row-end-4 col-start-4 col-end-5 flex flex-col">
                    <div className="h-[calc(50%-0.125rem)]"></div>
                    <div className="relative flex flex-1">
                        <div className="absolute w-full border-t-4 border-yellow-500"></div>
                        <div className="w-[calc(50%+0.125rem)] h-full border-t-4 border-e-4 border-yellow-500 rounded-tr-2xl"></div>
                        <div className="w-[calc(50%+0.125rem)] h-full -ms-1 border-s-4 border-t-4 border-yellow-500 rounded-tl-2xl"></div>
                    </div>
                </div>

                <div className="row-start-4 row-end-5 col-start-4 col-end-5 flex justify-center">
                    <div className="w-1 h-full bg-yellow-500"></div>
                </div>

                {/* subfork - entrance */}
                <div className="row-start-5 row-end-6 col-start-2 col-end-3 flex flex-col items-end">
                    <div className="flex-1"></div>
                    <div className="w-[calc(50%+0.125rem)] h-[calc(50%+0.125rem)] border-s-4 border-t-4 border-yellow-500 rounded-tl-xl"></div>
                </div>

                <div className="row-start-5 row-end-6 col-start-3 col-end-4 flex items-center">
                    <div className="w-full h-1 bg-yellow-500"></div>
                </div>

                <div className="row-start-5 row-end-6 col-start-4 col-end-5 flex flex-col">
                    <div className="flex flex-1">
                        <div className="w-[calc(50%+0.125rem)] h-full border-b-4 border-r-4 border-yellow-500 rounded-br-xl"></div>
                        <div className="w-[calc(50%+0.125rem)] h-full -ms-1 border-s-4 border-b-4 border-yellow-500 rounded-bl-xl"></div>
                    </div>
                    <div className="h-[calc(50%-0.125rem)]"></div>
                </div>

                <div className="row-start-5 row-end-6 col-start-5 col-end-6 flex items-center">
                    <div className="w-full h-1 bg-yellow-500"></div>
                </div>

                <div className="row-start-5 row-end-6 col-start-6 col-end-7 flex flex-col">
                    <div className="flex-1"></div>
                    <div className="w-[calc(50%+0.125rem)] h-[calc(50%+0.125rem)] border-t-4 border-e-4 border-yellow-500 rounded-tr-xl"></div>
                </div>
                {/* end */}

                {/* subfork - left branch */}
                <div className="row-start-6 row-end-7 col-start-2 col-end-3 flex justify-center">
                    <div className="w-1 h-full bg-yellow-500"></div>
                </div>
                {/* end */}

                {/* subfork - right branch */}
                <div className="row-start-6 row-end-7 col-start-6 col-end-7 flex justify-center">
                    <div className="w-1 h-full bg-yellow-500"></div>
                </div>
                {/* end */}

                {/* subfork - closure with station */}
                <div className="row-start-7 row-end-8 col-start-2 col-end-3 flex flex-col items-end">
                    <div className="w-[calc(50%+0.125rem)] h-[calc(50%+0.125rem)] border-s-4 border-b-4 border-yellow-500 rounded-bl-xl"></div>
                </div>

                <div className="row-start-7 row-end-8 col-start-3 col-end-4 flex items-center">
                    <div className="w-full h-1 bg-yellow-500"></div>
                </div>

                <div className="row-start-7 row-end-8 col-start-4 col-end-5 flex flex-col gap-1 items-center justify-center">
                    {/* Station signs */}
                    <div className="min-h-0 flex-1/2 flex items-end justify-center">
                        <div className="flex items-center gap-1 justify-center">
                            {/*<div className="shrink-0 w-5 text-center rounded bg-yellow-500 text-lg font-bold">1</div>*/}
                        </div>
                    </div>
                    {/* Marker */}
                    <div className="w-full flex items-center gap-0.5">
                        <div className="flex-1 h-1 bg-yellow-500 rounded-e-xl"></div>
                        <div className="size-2 bg-yellow-500 rounded-full"></div>
                        <div className="flex-1 h-1 bg-yellow-500 rounded-s-xl"></div>
                    </div>
                    {/* Station name */}
                    <div className="min-h-0 flex-1/2 flex flex-col items-center">
                        <div className="w-full min-w-max text-ellipsis text-end md:text-center bg-yellow-500 px-1 py-0.5 font-bold rounded-lg">Stanica</div>
                    </div>
                </div>

                <div className="row-start-7 row-end-8 col-start-5 col-end-6 flex items-center">
                    <div className="w-full h-1 bg-yellow-500"></div>
                </div>

                <div className="row-start-7 row-end-8 col-start-6 col-end-7 flex flex-col">
                    <div className="w-[calc(50%+0.125rem)] h-[calc(50%+0.125rem)] border-b-4 border-e-4 border-yellow-500 rounded-br-xl"></div>
                </div>
                {/* end */}

                {/* end */}

                <div className="row-start-3 row-end-4 col-start-5 col-end-6 flex items-center">
                    <div className="h-1 w-full bg-yellow-500"></div>
                </div>

                <div className="row-start-3 row-end-4 col-start-6 col-end-7 flex flex-col items-center justify-center">
                    {/* Station name */}
                    <div className="min-h-0 flex-1/2 flex flex-col items-center justify-end">
                        <div className="w-full min-w-max text-ellipsis text-end md:text-center">Stanica</div>
                    </div>
                    {/* Marker */}
                    <div className="w-full flex items-center gap-0.5">
                        <div className="flex-1 h-1 bg-yellow-500 rounded-e-xl"></div>
                        <div className="size-2 bg-yellow-500 rounded-full"></div>
                        <div className="flex-1 h-1 bg-yellow-500 rounded-s-xl"></div>
                    </div>
                    {/* Station signs */}
                    <div className="min-h-0 flex-1/2 flex items-start justify-center">
                        <div className="flex items-center gap-1 justify-center mt-1">
                            <div className="shrink-0 w-5 text-center rounded bg-yellow-500 text-lg font-bold">1</div>
                            <div className="shrink-0 w-5 text-center rounded bg-yellow-500 text-lg font-bold">1</div>
                        </div>
                    </div>
                </div>

                <div className="row-start-3 row-end-4 col-start-7 col-end-8 flex items-center">
                    <div className="h-1 w-full bg-yellow-500"></div>
                </div>
                {/* end */}

                {/* 2-track fork - entrance */}
                <div className="row-start-1 row-end-2 col-start-8 col-end-9 flex flex-col items-end justify-end">
                    <div className="w-[calc(50%+0.125rem)] h-[calc(50%+0.125rem)] border-s-4 border-t-4 border-yellow-500 rounded-tl-xl"></div>
                </div>

                <div className="row-start-2 row-end-3 col-start-8 col-end-9 relative flex justify-center">
                    <div className="w-1 bg-yellow-500"></div>
                </div>

                <div className="row-start-3 row-end-4 col-start-8 col-end-9 flex flex-col">
                    <div className="w-[calc(50%+0.125rem)] h-[calc(50%+0.125rem)] border-e-4 border-b-4 border-yellow-500 rounded-br-xl"></div>
                    <div className="-mt-1 w-[calc(50%+0.125rem)] h-[calc(50%+0.125rem)] border-t-4 border-e-4 border-yellow-500 rounded-tr-xl"></div>
                </div>

                <div className="row-start-4 row-end-5 col-start-8 col-end-9 relative flex justify-center">
                    <div className="w-1 bg-yellow-500"></div>
                </div>

                <div className="row-start-5 row-end-6 col-start-8 col-end-9 flex flex-col items-end">
                    <div className="w-[calc(50%+0.125rem)] h-[calc(50%+0.125rem)] border-l-4 border-b-4 border-yellow-500 rounded-bl-xl"></div>
                </div>
                {/* end */}

                {/* Fork - top branch */}
                <div className="row-start-1 row-end-2 col-start-9 col-end-10 flex items-center">
                    <div className="h-1 w-full bg-yellow-500"></div>
                </div>

                <div className="row-start-1 row-end-2 col-start-10 col-end-11 flex flex-col items-center justify-center">
                    {/* Station name */}
                    <div className="min-h-0 flex-1/2 flex flex-col items-center justify-end">
                        <div className="w-full min-w-max text-ellipsis text-center">Stanica</div>
                    </div>
                    {/* Marker */}
                    <div className="w-full flex flex-row items-center gap-0.5">
                        <div className="flex-1 h-1 bg-yellow-500 rounded-e-xl"></div>
                        <div className="size-2 bg-yellow-500 rounded-full"></div>
                        <div className="flex-1 h-1 bg-yellow-500 rounded-s-xl"></div>
                    </div>
                    {/* Station signs */}
                    <div className="min-h-0 flex-1/2 flex items-start justify-center">
                        <div className="flex items-center gap-1 justify-center mt-1">
                            <div className="shrink-0 w-5 text-center rounded bg-yellow-500 text-lg font-bold">1</div>
                            <div className="shrink-0 w-5 text-center rounded bg-yellow-500 text-lg font-bold">1</div>
                        </div>
                    </div>
                </div>

                <div className="row-start-1 row-end-2 col-start-11 col-end-16 flex items-center">
                    <div className="h-1 w-full bg-yellow-500"></div>
                </div>
                {/* end */}

                {/* Fork - bottom branch */}
                <div className="row-start-5 row-end-6 col-start-9 col-end-10 flex items-center">
                    <div className="h-1 w-full bg-yellow-500"></div>
                </div>

                <div className="row-start-5 row-end-6 col-start-10 col-end-11 flex flex-col items-center justify-center">
                    {/* Station name */}
                    <div className="min-h-0 flex-1/2 flex flex-col items-center justify-end">
                        <div className="w-full min-w-max text-ellipsis text-center">Stanica</div>
                    </div>
                    {/* Marker */}
                    <div className="w-full flex items-center gap-0.5">
                        <div className="flex-1 h-1 bg-yellow-500 rounded-e-xl"></div>
                        <div className="size-2 bg-yellow-500 rounded-full"></div>
                        <div className="flex-1 h-1 bg-yellow-500 rounded-s-xl"></div>
                    </div>
                    {/* Station signs */}
                    <div className="min-h-0 flex-1/2 flex items-start justify-center">
                        <div className="flex items-center gap-1 justify-center mt-1">
                            <div className="shrink-0 w-5 text-center rounded bg-yellow-500 text-lg font-bold">1</div>
                            <div className="shrink-0 w-5 text-center rounded bg-yellow-500 text-lg font-bold">1</div>
                        </div>
                    </div>
                </div>

                <div className="row-start-5 row-end-6 col-start-11 col-end-16 flex items-center">
                    <div className="h-1 w-full bg-yellow-500"></div>
                </div>

                <div className="row-start-5 row-end-6 col-start-13 col-end-14 flex items-center">
                    <div className="h-1 w-full bg-yellow-500"></div>
                </div>
                {/* end */}

                {/* 2-track connector with station */}
                <div className="row-start-1 row-end-2 col-start-12 col-end-13 relative flex flex-col justify-end">
                    <div className="absolute top-1/2 translate-y-[-0.125rem] w-full border-t-4 border-yellow-500"></div>
                    <div className="w-[calc(50%+0.125rem)] h-[calc(50%+0.125rem)] border-t-4 border-e-4 border-yellow-500 rounded-tr-xl"></div>
                </div>

                <div className="row-start-2 row-end-3 col-start-12 col-end-13 relative flex justify-center">
                    <div className="w-1 bg-yellow-500"></div>
                </div>

                <div className="row-start-3 row-end-4 col-start-12 col-end-13 flex gap-1 items-center justify-center">
                    {/* Station name */}
                    <div className="min-w-0 flex-1/2 flex justify-end">
                        <div className="w-full min-w-max text-center bg-yellow-500 px-1 py-0.5 font-bold rounded-lg">Stanica</div>
                    </div>
                    {/* Marker */}
                    <div className="h-full flex flex-col items-center gap-0.5">
                        <div className="flex-1 w-1 bg-yellow-500 rounded-b-xl"></div>
                        <div className="size-2 bg-yellow-500 rounded-full"></div>
                        <div className="flex-1 w-1 bg-yellow-500 rounded-t-xl"></div>
                    </div>
                    {/* Station signs */}
                    <div className="min-w-0 flex-1/2 flex">
                        <div className="flex items-center gap-1 justify-center mt-1">
                            <div className="shrink-0 w-5 text-center rounded bg-yellow-500 text-lg font-bold">1</div>
                        </div>
                    </div>
                </div>

                <div className="row-start-4 row-end-5 col-start-12 col-end-13 relative flex justify-center">
                    <div className="w-1 bg-yellow-500"></div>
                </div>

                <div className="row-start-5 row-end-6 col-start-12 col-end-13 relative flex flex-col">
                    <div className="absolute top-1/2 -translate-y-0.5 w-full border-b-4 border-yellow-500"></div>
                    <div className="w-[calc(50%+0.125rem)] h-[calc(50%+0.125rem)] border-e-4 border-b-4 border-yellow-500 rounded-br-xl"></div>
                </div>
                {/* end */}

                <div className="row-start-1 row-end-2 col-start-13 col-end-14 flex items-center">
                    <div className="h-1 w-full bg-yellow-500"></div>
                </div>

                {/* 2-track end connector with station */}
                <div className="row-start-1 row-end-2 col-start-16 col-end-17 flex flex-col justify-end">
                    <div className="w-[calc(50%+0.125rem)] h-[calc(50%+0.125rem)] border-t-4 border-e-4 border-yellow-500 rounded-tr-xl"></div>
                </div>

                <div className="row-start-2 row-end-3 col-start-16 col-end-17 relative flex justify-center">
                    <div className="w-1 bg-yellow-500"></div>
                </div>

                <div className="row-start-3 row-end-4 col-start-16 col-end-17 flex gap-1 items-center justify-center">
                    {/* Station signs */}
                    <div className="min-w-0 flex-1/2 flex justify-end">
                        <div className="flex items-center gap-1 justify-center mt-1">
                            <div className="shrink-0 w-5 text-center rounded bg-yellow-500 text-lg font-bold">1</div>
                        </div>
                    </div>
                    {/* Marker */}
                    <div className="h-full flex flex-col items-center gap-0.5">
                        <div className="flex-1 w-1 bg-yellow-500 rounded-b-xl"></div>
                        <div className="size-2 bg-yellow-500 rounded-full"></div>
                        <div className="flex-1 w-1 bg-yellow-500 rounded-t-xl"></div>
                    </div>
                    {/* Station name */}
                    <div className="min-w-0 flex-1/2 flex">
                        <div className="w-full min-w-max text-center bg-yellow-500 px-1 py-0.5 font-bold rounded-lg">Stanica</div>
                    </div>
                </div>

                <div className="row-start-4 row-end-5 col-start-16 col-end-17 relative flex justify-center">
                    <div className="w-1 bg-yellow-500"></div>
                </div>

                <div className="row-start-5 row-end-6 col-start-16 col-end-17 flex flex-col">
                    <div className="w-[calc(50%+0.125rem)] h-[calc(50%+0.125rem)] border-e-4 border-b-4 border-yellow-500 rounded-br-xl"></div>
                </div>
                {/* end */}

                {/* River */}
                <div className="row-start-7 row-end-8 col-start-8 col-end-17 bg-sky-300"></div>

                {/* Trolleybus route */}
                <div className="row-start-9 row-end-10 col-start-15 col-end-16 flex items-center">
                    <div className="h-1 w-full bg-red-500"></div>
                </div>

                <div className="row-start-9 row-end-10 col-start-16 col-end-17 flex flex-col items-center justify-center">
                    {/* Station name */}
                    <div className="min-h-0 flex-1/2 flex flex-col items-center justify-end">
                        <div className="w-full min-w-max text-ellipsis text-center bg-red-500 px-1 py-0.5 mb-1 font-bold rounded-lg">Stanica</div>
                    </div>
                    {/* Marker */}
                    <div className="w-full flex flex-row items-center gap-0.5">
                        <div className="flex-1 h-1 bg-red-500 rounded-e-xl"></div>
                        <div className="size-2 bg-red-500 rounded-full"></div>
                        <div className="flex-1"></div>
                    </div>
                    {/* Station signs */}
                    <div className="min-h-0 flex-1/2 flex items-start justify-center">
                        <div className="flex items-center gap-1 justify-center mt-1">
                            <div className="shrink-0 w-5 text-center rounded bg-red-500 text-lg font-bold">1</div>
                            <div className="shrink-0 w-5 text-center rounded bg-red-500 text-lg font-bold">1</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

function Station({stationName, lines}: {stationName: string, lines?: string[]}) {
    return (
        <div className="flex gap-2 md:flex-col w-full md:max-w-[50px] max-h-[50px] md:max-h-none md:h-full">
            {/* Station label */}
            <div className="flex-1/2 max-w-1/2 md:max-w-none flex md:flex-col items-center justify-end overflow-hidden md:overflow-visible">
                <div className="w-full overflow-hidden md:overflow-visible md:min-w-max text-ellipsis text-end md:text-center">{stationName}</div>
            </div>
            {/* Station marker */}
            <div className="flex flex-col md:flex-row items-center gap-0.5">
                <div className="flex-1 w-1 h-0 md:w-0 md:h-1 bg-yellow-500 rounded-b-xl md:rounded-b-none md:rounded-br-xl md:rounded-e-xl"></div>
                <div className="size-2 bg-yellow-500 rounded-full"></div>
                <div className="flex-1 w-1 md:h-1 bg-yellow-500 rounded-t-xl md:rounded-t-none md:rounded-tl-xl md:rounded-s-xl"></div>
            </div>
            {/* Station signs */}
            <div className="flex-1/2 flex items-center md:items-start justify-start md:justify-center">
                <div className="flex items-center flex-wrap gap-1 justify-start md:justify-center">
                    { lines?.map((line, index) => (
                        <div key={`${stationName}-line${index}`} className="shrink-0 w-5 text-center rounded bg-yellow-500 text-lg font-bold">{line}</div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function Separator({length}: {length: number}) {
    return (
        <>
            <div className="hidden md:block shrink-0" style={{ width: `${length}px` }}>
                <div className="flex w-full h-1 bg-yellow-500"></div>
            </div>
            <div className="block md:hidden shrink-0" style={{ height: `${length}px` }}>
                <div className="flex h-full w-1 bg-yellow-500"></div>
            </div>
        </>
    )
}

function Fork({stations, direction}: {stations : {name: string, lines?: string[]}[], direction? : 'left' | 'right'}) {
    return (
        <div className={clsx('w-full md:w-auto h-auto md:h-full flex',
            {
                'flex-row md:flex-col': !direction || direction === 'left',
                'flex-row-reverse md:flex-col-reverse justify-end md:items-end': direction === 'right',
            }
        )}>
            {/*<div className={clsx('min-w-max md:min-h-max h-[50px] w-[calc(50%+0.125rem)] md:w-[50px] md:h-[calc(50%+0.125rem)] flex',*/}
            <div className={clsx('min-w-max md:min-h-max w-[calc(50%+0.125rem)] md:w-[50px] md:h-[calc(50%+0.125rem)] flex',
                {
                    'flex-row md:flex-col justify-end': !direction || direction === 'left',
                    'flex-row-reverse md:flex-col-reverse': direction === 'right',
                }
            )}>

                {/* Perpendicular fork track */}
                <div className={clsx('grow h-full md:w-full flex pb-1 md:pb-0 md:pe-1',
                    {
                        'flex-row md:flex-col justify-end md:items-end': !direction || direction === 'left',
                        'flex-row-reverse md:flex-col-reverse justify-end md:items-end': direction === 'right',
                    }
                )}>

                    {/* TODO test "inverted" 2-line fork */}
                    { !(stations.at(-1)!).lines &&
                        <div className="h-[200px] md:h-auto w-auto md:w-[200px]">
                            <TwoTrackForkConnector inverted={true}/>
                        </div>
                    }

                    { stations.reverse().map((station, index) => (
                        // TODO unique key for each fork
                        <Fragment key={`fork-${index}`}>
                            { index === 0 && !!station.lines && <ForkTerminus stationName={station.name} lines={station.lines} direction={direction}/> }
                            { index === 0 && !station.lines && <ForkStation stationName={station.name}/> }
                            { index > 0 && <>
                                <ForkFlatSegment/>
                                <ForkStation stationName={station.name}/>
                            </>}
                        </Fragment>
                    )) }
                </div>

                {/* Connection to main track */}
                <div className="shrink-0 relative w-[25px] h-full md:w-full md:h-[25px] flex flex-col md:flex-row">
                    <div className={clsx('absolute h-full md:h-1 w-1 md:w-full bg-yellow-500',
                        {
                            'right-0 bottom-0': !direction || direction === 'left',
                            'left-0 top-0': direction === 'right',
                        }
                    )}></div>
                    <div className={clsx('h-1/2 md:h-full md:w-1/2 -mb-1 me-0 md:mb-0 md:-me-1 border-yellow-500 border-4',
                        {
                            'border-s-0 border-t-0 rounded-br-3xl rounded-tl-none': !direction || direction === 'left',
                            'border-e-0 border-t-0 rounded-bl-3xl md:border-t-4 md:border-e-4 md:border-s-0 md:border-b-0 md:rounded-bl-none md:rounded-tr-3xl': direction === 'right',
                        }
                    )}></div>
                    <div className={clsx('grow border-yellow-500 border-4',
                        {
                            'border-s-0 border-b-0 rounded-tr-3xl rounded-bl-none md:border-s-4 md:border-b-4 md:border-t-0 md:border-r-0 md:rounded-bl-3xl md:rounded-tr-none': !direction || direction === 'left',
                            'border-e-0 border-b-0 rounded-tl-3xl md:border-s-4 md:rounded-tl-3xl': direction === 'right',
                        }
                    )}></div>
                </div>
            </div>

            <div className="shrink-0 h-[50px] w-[calc(50%-0.125rem)] md:w-[50px] md:h-[calc(50%-0.125rem)] flex md:flex-col"></div>

        </div>
    );
}

function ForkTerminus({stationName, lines, direction}: {stationName: string, lines: string[], direction? : 'left' | 'right'}) {
    return (
        <div className="h-full md:h-auto max-w-[50px] md:w-full flex flex-col md:flex-row gap-1 md:gap-2">

            <div className="flex-1/2 h-0 md:h-auto md:w-0 flex gap-1 justify-center md:justify-end items-end">
                { lines.map((line, index) => (
                    <div key={`${stationName}-line${index}`} className="shrink-0 w-5 mb-1 text-center rounded bg-yellow-500 text-lg font-bold">{line}</div>
                ))}
            </div>

            <div className={clsx('flex items-center gap-0.5',
                {
                    'flex-row md:flex-col': !direction || direction === 'left',
                    'flex-row-reverse md:flex-col-reverse': direction === 'right',
                }
            )}>
                <div className="flex-1"></div>
                <div className="size-2 bg-yellow-500 rounded-full"></div>
                <div className={clsx('flex-1 h-1 w-0 md:h-0 md:w-1 bg-yellow-500',
                    {
                        'rounded-s-xl md:rounded-s-none md:rounded-t-xl': !direction || direction === 'left',
                        'rounded-e-xl md:rounded-e-none md:rounded-b-xl': direction === 'right',
                    }
                )}></div>
            </div>

            <div className="flex-1/2 h-0 md:h-auto md:w-0 md:text-nowrap flex md:flex-col justify-center">
                <div className="text-center">{stationName}</div>
            </div>
        </div>
    );
}

function ForkStation({stationName}: {stationName: string}) {
    return (
        <div className="h-full md:h-auto max-w-[50px] w-auto md:w-full flex flex-col md:flex-row gap-1 md:gap-2">
            <div className="flex-1/2"></div>
            <div className="flex md:flex-col items-center gap-0.5">
                <div className="flex-1 h-1 w-0 md:h-0 md:w-1 bg-yellow-500 rounded-e-xl md:rounded-e-none md:rounded-br-xl md:rounded-b-xl"></div>
                <div className="size-2 bg-yellow-500 rounded-full"></div>
                <div className="flex-1 h-1 w-0 md:h-0 md:w-1 bg-yellow-500 rounded-s-xl md:rounded-s-none md:rounded-tr-xl md:rounded-t-xl"></div>
            </div>

            <div className="flex-1/2 h-0 md:h-auto md:w-0 md:text-nowrap flex md:flex-col justify-center">
                <div className="text-center">{stationName}</div>
            </div>
        </div>
    );
}

function ForkFlatSegment() {
    return (
        <div className="h-full md:h-[50px] w-[50px] md:w-full flex flex-col md:flex-row">
            <div className="flex-1/2"></div>
            <div className="shrink-0 w-full h-1 md:h-full md:w-1 bg-yellow-500"></div>
            <div className="flex-1/2"></div>
        </div>
    );
}

function TwoTrackForkConnector({ inverted } : { inverted?: boolean }) {
    return (
        <div className={clsx('flex',
            {
                'w-full md:w-auto h-auto md:h-full md:flex-col': !inverted,
                'w-auto md:w-full h-full md:h-auto flex-col md:flex-row': inverted,
            }
        )}>

            {/* Left/top branch */}
            <div className={clsx('flex-1/2 flex',
                {
                    'md:flex-col': !inverted,
                    'flex-col md:flex-row': inverted,
                }
            )}>
                <div className="grow"></div>
                {/* 50% + half of w-1 */}
                <div className={clsx('flex',
                    {
                        'w-[calc(50%+0.125rem)] md:w-[50px] h-auto md:h-[calc(50%+0.125rem)] md:flex-col': !inverted,
                        'w-[50px] md:w-[calc(50%+0.125rem)] h-[calc(50%+0.125rem)] md:h-auto flex-col md:flex-row': inverted,
                    }
                )}>
                    <div className={clsx('flex',
                        {
                            'flex-col md:flex-row w-1/2 md:w-auto h-[50px] md:h-1/2': !inverted,
                            'md:flex-col w-auto md:w-1/2 h-1/2 md:h-[50px]': inverted,
                        }
                    )}>
                        <div className={clsx('flex-1/2', {
                            'hidden md:flex': !inverted,
                            'flex md:hidden': inverted,
                        })}></div>
                        <div className={clsx({
                            'w-auto md:w-1/2 h-[calc(50%+0.25rem)] md:h-auto border-4 border-yellow-500 border-t-0 border-e-0 md:border-t-4 md:border-b-0 rounded-bl-2xl md:rounded-b-none md:rounded-tl-2xl': !inverted,
                            'w-1/2 md:w-auto h-auto md:h-[calc(50%+0.25rem)] border-4 border-yellow-500 border-b-0 border-e-0 md:border-t-0 md:border-b-4 rounded-tl-2xl md:rounded-tl-none md:rounded-bl-2xl': inverted
                        })}></div>
                        <div className={clsx('flex-1/2', {
                            'flex md:hidden': !inverted,
                            'hidden md:flex': inverted,
                        })}></div>
                    </div>
                    {/* bring back to the right/bottom so that the borders "connect" */}
                    <div className={clsx('flex',
                        {
                            'flex-col md:flex-row w-[calc(50%+0.125rem)] md:w-[50px] h-[50px] md:h-[calc(50%+0.125rem)] -me-1 md:me-0 md:-mb-1': !inverted,
                            'flex-row md:flex-col w-[50px] md:w-[calc(50%+0.125rem)] h-[calc(50%+0.125rem)] md:h-[50px] md:-me-1 -mb-1 md:mb-0': inverted,
                        }
                    )}>
                        <div className={clsx('flex-1/2', {
                            'flex md:hidden': !inverted,
                            'hidden md:flex': inverted,
                        })}></div>
                        <div className={clsx({
                            'w-full md:w-[calc(50%+0.25rem)] h-[calc(50%+0.25rem)] md:h-auto border-4 border-yellow-500 border-s-0 border-b-0 md:border-b-4 md:border-t-0 rounded-tr-2xl md:rounded-t-none md:rounded-br-2xl': !inverted,
                            'w-[calc(50%+0.25rem)] md:w-full h-auto md:h-[calc(50%+0.25rem)] border-4 border-yellow-500 border-t-0 md:border-b-4 md:border-b-0 md:border-t-4 rounded-br-2xl md:rounded-br-none md:rounded-tr-2xl': inverted,
                        })}></div>
                    </div>
                </div>
            </div>

            {/* Right/bottom branch */}
            <div className={clsx('flex-1/2 flex',
                {
                    'md:flex-col': !inverted,
                    'flex-col md:flex-row': inverted
                }
            )}>
                {/* 50% + half of w-1 */}
                <div className={clsx('flex',
                    {
                        'w-[calc(50%+0.125rem)] md:w-[50px] h-auto md:h-[calc(50%+0.125rem)] md:flex-col': !inverted,
                        'w-[50px] md:w-[calc(50%+0.125rem)] h-[calc(50%+0.125rem)] md:h-auto flex-col md:flex-row': inverted,
                    }
                )}>
                    {/* bring back to the left/top so that the borders "connect" */}
                    <div className={clsx('flex',
                        {
                            'flex-col md:flex-row w-1/2 md:w-[50px] h-[50px] md:h-[calc(50%+0.125rem)] -ms-0.5 md:ms-0 md:-mt-0.5': !inverted,
                            'md:flex-col w-[50px] md:w-1/2 h-[calc(50%+0.125rem)] md:h-[50px] md:-ms-0.5 -mt-0.5 md:mt-0': inverted,
                        }
                    )}>
                        <div className={clsx('flex-1/2',
                            {
                                'flex md:hidden': !inverted,
                                'hidden md:flex': inverted,
                            }
                        )}></div>
                        <div className={clsx({
                            'w-full md:w-[calc(50%+0.25rem)] h-[calc(50%+0.25rem)] md:h-auto border-4 border-yellow-500 border-b-0 border-e-0 md:border-e-4 md:border-s-0 rounded-tl-2xl md:rounded-tl-none md:rounded-tr-2xl': !inverted,
                            'w-[calc(50%+0.25rem)] md:w-full h-auto md:h-[calc(50%+0.25rem)] border-4 border-yellow-500 border-s-0 md:border-s-4 md:border-e-0 rounded-tr-2xl md:rounded-tr-none md:rounded-tl-2xl': inverted,
                        })}></div>
                    </div>
                    <div className={clsx('flex',
                        {
                            'flex-col md:flex-row w-[calc(50%+0.125rem)] md:w-auto h-[50px] md:h-1/2': !inverted,
                            'md:flex-col w-auto md:w-[calc(50%+0.125rem)] h-1/2 md:h-[50px]': inverted,
                        }
                    )}>
                        <div className={clsx('flex-1/2',
                            {
                                'hidden md:flex': !inverted,
                                'flex md:hidden': inverted,
                            }
                        )}></div>
                        <div className={clsx({
                            'w-auto md:w-1/2 h-[calc(50%+0.25rem)] md:h-auto border-4 border-yellow-500 border-t-0 border-s-0 md:border-s-4 md:border-e-0 rounded-br-2xl md:rounded-br-none md:rounded-bl-2xl': !inverted,
                            'w-1/2 md:w-auto h-auto md:h-[calc(50%+0.25rem)] border-4 border-yellow-500 border-e-0 border-t-0 md:border-e-4 rounded-bl-2xl md:rounded-bl-none md:rounded-br-2xl': inverted,
                        })}></div>
                        <div className={clsx('flex-1/2',
                            {
                                'flex md:hidden': !inverted,
                                'hidden md:flex': inverted,
                            }
                        )}></div>
                    </div>
                </div>
                <div className="grow"></div>
            </div>

        </div>
    );
}

function TwoTrackFork() {
    return (
        <div className="w-full md:w-auto h-auto md:h-full flex md:flex-col">

            {/* Top/left branch */}
            <div className="flex-1/2 flex flex-col-reverse md:flex-row items-center justify-center">
                {/* Branch edge padding */}
                <div className="flex-1/2 w-full md:w-[100px] h-[100px] md:h-full flex md:flex-col gap-2">
                    <div className="flex-1/2"></div>
                    <div className="shrink-0 w-2 md:w-full h-full md:h-2 flex justify-center md:items-center">
                        <div className="w-1 h-full md:w-full md:h-1 bg-yellow-500"></div>
                    </div>
                    <div className="flex-1/2"></div>
                </div>

                {/* Station - left/top label */}
                <div className="flex gap-2 md:flex-col w-full md:max-w-[50px] max-h-[50px] md:max-h-none md:h-full">
                    {/* Station label */}
                    <div className="flex-1/2 max-w-1/2 md:max-w-none flex md:flex-col items-center justify-end overflow-hidden md:overflow-visible">
                        <div className="w-full overflow-hidden md:overflow-visible md:min-w-max text-ellipsis text-end md:text-center">Zeljeznicka Stanica</div>
                    </div>
                    {/* Station marker */}
                    <div className="flex flex-col md:flex-row items-center gap-0.5">
                        <div className="flex-1 w-1 h-0 md:w-0 md:h-1 bg-yellow-500 rounded-b-xl md:rounded-b-none md:rounded-br-xl md:rounded-e-xl"></div>
                        <div className="size-2 bg-yellow-500 rounded-full"></div>
                        <div className="flex-1 w-1 md:h-1 bg-yellow-500 rounded-t-xl md:rounded-t-none md:rounded-tl-xl md:rounded-s-xl"></div>
                    </div>
                    {/* Station signs */}
                    <div className="flex-1/2 flex items-center md:items-start justify-start md:justify-center">
                        <div className="flex items-center flex-wrap gap-1 justify-start md:justify-center">
                            <div className="shrink-0 w-5 text-center rounded bg-yellow-500 text-lg font-bold">1</div>
                            <div className="shrink-0 w-5 text-center rounded bg-yellow-500 text-lg font-bold">2</div>
                            <div className="shrink-0 w-5 text-center rounded bg-yellow-500 text-lg font-bold">3</div>
                            <div className="shrink-0 w-5 text-center rounded bg-yellow-500 text-lg font-bold">4</div>
                        </div>
                    </div>
                </div>

                {/* Branch edge padding */}
                <div className="flex-1/2 w-full md:w-[100px] h-[100px] md:h-full flex md:flex-col gap-2">
                    <div className="flex-1/2"></div>
                    <div className="shrink-0 w-2 md:w-full h-full md:h-2 flex justify-center md:items-center">
                        <div className="w-1 h-full md:w-full md:h-1 bg-yellow-500"></div>
                    </div>
                    <div className="flex-1/2"></div>
                </div>
            </div>

            {/* Bottom/right branch */}
            <div className="flex-1/2 flex flex-col-reverse md:flex-row items-center justify-center">
                {/* Branch edge padding */}
                <div className="flex-1/2 w-full md:w-[100px] h-[100px] md:h-full flex md:flex-col gap-2">
                    <div className="flex-1/2"></div>
                    <div className="shrink-0 w-2 md:w-full h-full md:h-2 flex justify-center md:items-center">
                        <div className="w-1 h-full md:w-full md:h-1 bg-yellow-500"></div>
                    </div>
                    <div className="flex-1/2 md:flex-1/2"></div>
                </div>

                {/* Station - right/bottom label */}
                <div className="flex gap-2 md:flex-col w-full md:max-w-[50px] max-h-[50px] md:max-h-none md:h-full">
                    {/* Station signs */}
                    <div className="flex-1/2 max-w-1/2 md:max-w-none flex items-center md:items-end justify-end md:justify-center">
                        <div className="flex items-center flex-wrap gap-1 justify-end md:justify-center">
                            <div className="shrink-0 w-5 text-center rounded bg-yellow-500 text-lg font-bold">1</div>
                            <div className="shrink-0 w-5 text-center rounded bg-yellow-500 text-lg font-bold">2</div>
                            <div className="shrink-0 w-5 text-center rounded bg-yellow-500 text-lg font-bold">3</div>
                            <div className="shrink-0 w-5 text-center rounded bg-yellow-500 text-lg font-bold">4</div>
                        </div>
                    </div>
                    {/* Station marker */}
                    <div className="flex flex-col md:flex-row items-center gap-0.5">
                        <div className="flex-1 w-1 h-0 md:w-0 md:h-1 bg-yellow-500 rounded-b-xl md:rounded-b-none md:rounded-br-xl md:rounded-e-xl"></div>
                        <div className="size-2 bg-yellow-500 rounded-full"></div>
                        <div className="flex-1 w-1 md:h-1 bg-yellow-500 rounded-t-xl md:rounded-t-none md:rounded-tl-xl md:rounded-s-xl"></div>
                    </div>
                    {/* Station label */}
                    <div className="flex-1/2 max-w-1/2 md:max-w-none flex md:flex-col items-center justify-start overflow-hidden md:overflow-visible">
                        <div className="w-full overflow-hidden md:overflow-visible md:min-w-max text-ellipsis md:text-center">Banka</div>
                    </div>
                </div>

                {/* Station - right/bottom label */}
                <div className="flex gap-2 md:flex-col w-full md:max-w-[50px] max-h-[50px] md:max-h-none md:h-full">
                    {/* Station signs */}
                    <div className="flex-1/2 max-w-1/2 md:max-w-none flex items-center md:items-end justify-end md:justify-center">
                        <div className="flex items-center flex-wrap gap-1 justify-end md:justify-center">
                        </div>
                    </div>
                    {/* Station marker */}
                    <div className="flex flex-col md:flex-row items-center gap-0.5">
                        <div className="flex-1 w-1 h-0 md:w-0 md:h-1 bg-yellow-500 rounded-b-xl md:rounded-b-none md:rounded-br-xl md:rounded-e-xl"></div>
                        <div className="size-2 bg-yellow-500 rounded-full"></div>
                        <div className="flex-1 w-1 md:h-1 bg-yellow-500 rounded-t-xl md:rounded-t-none md:rounded-tl-xl md:rounded-s-xl"></div>
                    </div>
                    {/* Station label */}
                    <div className="flex-1/2 max-w-1/2 md:max-w-none flex md:flex-col items-center justify-start overflow-hidden">
                        <div className="w-full overflow-hidden text-ellipsis md:text-center">Banka</div>
                    </div>
                </div>

                {/* Branch edge padding */}
                <div className="flex-1/2 w-full md:w-[100px] h-[100px] md:h-full flex md:flex-col gap-2">
                    <div className="flex-1/2"></div>
                    <div className="shrink-0 w-2 md:w-full h-full md:h-2 flex justify-center md:items-center">
                        <div className="w-1 h-full md:w-full md:h-1 bg-yellow-500"></div>
                    </div>
                    <div className="flex-1/2"></div>
                </div>
            </div>

        </div>
    );
}

function MiddleForkConnectorWithStation() {
    return (
        <div className="relative w-full md:w-[50px] h-[50px] md:h-full flex md:flex-col">
            <div className="flex-1/4"></div>

            <div className="relative w-[calc(50%+0.5rem)] md:w-auto h-auto md:h-[calc(50%+0.5rem)] flex md:flex-col"> {/* w = half the container + border-1 (0.25rem) * 2 */}
                <div className="absolute size-full border-yellow-500 border-x-4 md:border-x-0 md:border-y-4"></div>

                {/* left/top connector */}
                <div className="flex-1/2 flex md:flex-col items-end md:items-start">
                    {/* 50% of container + half-ish of a border-1 */}
                    <div className="h-[calc(50%+0.15rem)] md:h-full w-full md:w-[calc(50%+0.125rem)] border-yellow-500 border-t-4 border-s-4 md:border-s-0 md:border-e-4 rounded-tl-2xl md:rounded-tl-none md:rounded-tr-2xl"></div>
                </div>

                {/* Station - top/left label */}
                <div className="flex gap-2 flex-col md:flex-row justify-center md:max-w-[50px]">
                    {/* Station label */}
                    <div className="flex-1/2 md:max-w-1/2 flex md:flex-col md:items-end justify-center">
                        <div className="text-center md:text-end">
                            Stanica
                        </div>
                    </div>
                    {/* Station marker */}
                    <div className="flex md:flex-col items-center gap-0.5">
                        <div className="flex-1 w-0 md:w-1 h-1 md:h-0 bg-yellow-500 rounded-e-xl md:rounded-e-none md:rounded-b-xl"></div>
                        <div className="size-2 bg-yellow-500 rounded-full"></div>
                        <div className="flex-1 w-0 md:w-1 h-1 md:h-0 bg-yellow-500 rounded-s-xl md:rounded-s-none md:rounded-t-xl"></div>
                    </div>
                    {/* Station signs */}
                    <div className="flex-1/2 max-h-1/2 md:max-h-none shrink-0 flex items-center md:items-start justify-center">
                        <div className="flex items-center flex-wrap gap-1 justify-start md:justify-center">
                            <div className="shrink-0 w-5 text-center rounded bg-yellow-500 text-lg font-bold">1</div>
                        </div>
                    </div>
                </div>

                {/* right/bottom connector*/}
                <div className="flex-1/2 flex md:flex-col items-end md:items-start">
                    {/* 50% of container + half-ish of a border-1 */}
                    <div className="h-[calc(50%+0.15rem)] md:h-full w-full md:w-[calc(50%+0.125rem)] border-yellow-500 border-e-4 border-t-4 md:border-t-0 md:border-b-4 rounded-tr-2xl md:rounded-tr-none md:rounded-br-2xl"></div>
                </div>

            </div>

            <div className="flex-1/4"></div>
        </div>
    );
}

function EndForkConnector() {
    return (
        <div className="shrink-0 w-full md:w-[25px] h-[25px] md:h-full flex md:flex-col">
            {/* left/top connector */}
            <div className="flex-1/2 flex md:flex-col justify-end md:items-end">
                {/* 50% of container + half of a border-1 */}
                <div className="w-[calc(50%+0.125rem)] md:w-full h-full md:h-[calc(50%+0.125rem)] border-yellow-500 border-t-4 border-s-4 md:border-s-0 md:border-e-4 rounded-tl-2xl md:rounded-tl-none md:rounded-tr-2xl"></div>
            </div>
            {/* right/bottom connector*/}
            <div className="flex-1/2">
                {/* 50% of container + half of a border-1 */}
                <div className="w-[calc(50%+0.125rem)] md:w-full h-full md:h-[calc(50%+0.125rem)] border-yellow-500 border-e-4 border-t-4 md:border-t-0 md:border-b-4 rounded-tr-2xl md:rounded-tr-none md:rounded-br-2xl"></div>
            </div>
        </div>
    );
}