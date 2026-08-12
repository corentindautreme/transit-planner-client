import { ChevronsDown, ChevronsLeft, ChevronsRight, TramFront } from 'lucide-react';

export default async function Page() {
    return (
        <>
            <div className="h-full w-[200%] bg-white rounded-xl py-3 px-1 flex items-center md:flex-col md:justify-center mx-auto overflow-y-hidden overflow-x-scroll">

                <div className="relative w-full md:w-auto h-auto md:h-full flex flex-col md:flex-row justify-center items-start">
                    {/* Live tram */}
                    <div className="absolute flex items-center justify-center left-1/2 -translate-x-1/2 md:translate-x-0 translate-y-0 md:-translate-y-1/2 top-[52%] md:top-1/2 md:left-[52%]">
                        <div className="md:hidden"><VerticalVehicle direction={'down'}/></div>
                        <div className="hidden md:block"><HorizontalVehicle direction={'left'}/></div>
                    </div>

                    {/* Flat segment */}
                    <div className="w-full md:w-auto h-auto md:h-full flex md:flex-col">
                        <div className="flex-1/2"></div>
                        <div className="shrink-0 h-[75px] w-1 md:w-[75px] md:h-1 bg-yellow-500"></div>
                        <div className="flex-1/2"></div>
                    </div>

                    {/* Fork left/top */}
                    <div className="w-full md:w-auto h-auto md:h-full flex md:flex-col">
                        <div className="h-[50px] w-[calc(50%+0.125rem)] md:w-[50px] md:h-[calc(50%+0.125rem)] flex md:flex-col">

                            {/* Perpendicular fork track */}
                            <div className="grow h-full md:w-full flex md:flex-col justify-end md:items-end pb-1 md:pb-0 md:pe-1">

                                {/* Terminus */}
                                <div className="h-full md:h-auto max-w-[50px] md:w-full flex flex-col md:flex-row gap-1 md:gap-2">

                                    <div className="flex-1/2 h-0 md:h-auto md:w-0 flex gap-1 justify-center md:justify-end items-end">
                                        <div className="shrink-0 w-5 mb-1 text-center rounded bg-yellow-500 text-lg font-bold">1</div>
                                        <div className="shrink-0 w-5 mb-1 text-center rounded bg-yellow-500 text-lg font-bold">4</div>
                                    </div>

                                    <div className="flex md:flex-col items-center gap-0.5">
                                        <div className="flex-1"></div>
                                        <div className="size-2 bg-yellow-500 rounded-full"></div>
                                        <div className="flex-1 h-1 w-0 md:h-0 md:w-1 bg-yellow-500 rounded-s-xl md:rounded-s-none md:rounded-tr-xl md:rounded-t-xl"></div>
                                    </div>

                                    <div className="flex-1/2 h-0 md:h-auto md:w-0 md:text-nowrap flex md:flex-col justify-center">
                                        <div className="text-center">Željeznička stanica</div>
                                    </div>
                                </div>

                                {/* Flat segment */}
                                <div className="h-full md:h-[50px] w-[50px] md:w-full flex flex-col md:flex-row">
                                    <div className="flex-1/2"></div>
                                    <div className="shrink-0 w-full h-1 md:h-full md:w-1 bg-yellow-500"></div>
                                    <div className="flex-1/2"></div>
                                </div>

                                {/* Station */}
                                <div className="h-full md:h-auto max-w-[50px] w-auto md:w-full flex flex-col md:flex-row gap-1 md:gap-2">
                                    <div className="flex-1/2"></div>
                                    <div className="flex md:flex-col items-center gap-0.5">
                                        <div className="flex-1 h-1 w-0 md:h-0 md:w-1 bg-yellow-500 rounded-e-xl md:rounded-e-none md:rounded-br-xl md:rounded-b-xl"></div>
                                        <div className="size-2 bg-yellow-500 rounded-full"></div>
                                        <div className="flex-1 h-1 w-0 md:h-0 md:w-1 bg-yellow-500 rounded-s-xl md:rounded-s-none md:rounded-tr-xl md:rounded-t-xl"></div>
                                    </div>

                                    <div className="flex-1/2 h-0 md:h-auto md:w-0 md:text-nowrap flex md:flex-col justify-center">
                                        <div className="text-center">Tehnička škola</div>
                                    </div>
                                </div>

                                {/* Flat segment */}
                                <div className="h-full md:h-auto w-auto md:w-full flex flex-col md:flex-row">
                                    <div className="flex-1/2"></div>
                                    <div className="shrink-0 w-[10px] h-1 md:h-[10px] md:w-1 bg-yellow-500"></div>
                                    <div className="flex-1/2"></div>
                                </div>
                            </div>

                            {/* Connection to main track */}
                            <div className="w-[25px] h-full md:w-full md:h-[25px] flex flex-col md:flex-row">
                                <div className="h-1/2 md:h-full md:w-1/2 -mb-1 me-0 md:mb-0 md:-me-1 border-yellow-500 border-4 border-s-0 border-t-0 rounded-br-xl rounded-tl-none"></div> {/*md:border-s-4 md:border-t-4 md:border-b-0 md:border-l-0 md:rounded-tl-xl md:rounded-br-none*/}
                                <div className="grow border-yellow-500 border-4 border-s-0 border-b-0 rounded-tr-xl rounded-bl-none md:border-s-4 md:border-b-4 md:border-t-0 md:border-r-0 md:rounded-bl-xl md:rounded-tr-none"></div>
                            </div>
                        </div>


                        <div className="bg-background shrink-0 h-[50px] w-[calc(50%-0.125rem)] md:w-[50px] md:h-[calc(50%-0.125rem)] flex md:flex-col"></div>

                    </div>

                    <div className="w-full md:w-auto h-auto md:h-full flex flex-row gap-1 md:gap-2 md:flex-col">
                        <div className="flex-1/2"></div>
                        <div className="flex flex-col md:flex-row items-center gap-0.5">
                            <div className="flex-1 w-1 h-0 md:w-0 md:h-1 bg-yellow-500 rounded-b-xl md:rounded-b-none md:rounded-br-xl md:rounded-e-xl"></div>
                            <div className="size-2 bg-yellow-500 rounded-full"></div>
                            <div className="flex-1 w-1 md:h-1 bg-yellow-500 rounded-t-xl md:rounded-t-none md:rounded-tl-xl md:rounded-s-xl"></div>
                        </div>

                        <div className="flex-1/2">
                            <div>Tehnička škola</div>
                        </div>
                    </div>

                    <div className="w-full md:w-auto h-auto md:h-full flex md:flex-col">
                        <div className="flex-1/2"></div>
                        <div className="shrink-0 h-[75px] w-1 md:w-[75px] md:h-1 bg-yellow-500"></div>
                        <div className="flex-1/2"></div>
                    </div>

                    <div className="w-full md:w-auto h-auto md:h-full flex flex-row gap-1 md:gap-2 md:flex-col">
                        <div className="flex-1/2"></div>
                        <div className="flex flex-col md:flex-row items-center gap-0.5">
                            <div className="flex-1 w-1 h-0 md:w-0 md:h-1 bg-yellow-500 rounded-b-xl md:rounded-b-none md:rounded-br-xl md:rounded-e-xl"></div>
                            <div className="size-2 bg-yellow-500 rounded-full"></div>
                            <div className="flex-1 w-1 md:h-1 bg-yellow-500 rounded-t-xl md:rounded-t-none md:rounded-tl-xl md:rounded-s-xl"></div>
                        </div>

                        <div className="flex-1/2">
                            <div>Marijin dvor</div>
                        </div>
                    </div>

                    <div className="w-full md:w-auto h-auto md:h-full flex md:flex-col">
                        <div className="flex-1/2"></div>
                        <div className="shrink-0 h-[100px] w-1 md:w-[100px] md:h-1 bg-yellow-500"></div>
                        <div className="flex-1/2"></div>
                    </div>
                </div>
            </div>
        </>
    );
}

function VerticalVehicle({direction}: {direction: 'up' | 'down'}) {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center">
            { direction === 'up' &&
                <div className="-z-1 -mt-1 w-0 h-0 border-b-18 border-yellow-500 border-l-9 border-l-transparent border-r-9 border-r-transparent">

                </div>
            }
            <div className="-mt-1 flex items-center justify-center size-6 rounded-full bg-white border-2 border-yellow-500">
                <TramFront className="size-4"/>
            </div>
            { direction === 'down' &&
                <div className="-z-1 flex justify-center -mt-1 ms-0 w-0 h-0 border-t-18 border-yellow-500 border-l-9 border-l-transparent border-r-9 border-r-transparent">
                    <ChevronsDown className="shrink-0 mt-[-18px] w-2.5 animate-bounce"/>
                </div>
            }
        </div>
    );
}

function HorizontalVehicle({direction}: {direction: 'left' | 'right'}) {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center">
            { direction === 'left' &&
                <div className="-z-1 flex items-center -me-1 w-0 h-0 border-r-18 border-yellow-500 border-t-9 border-t-transparent border-b-9 border-b-transparent">
                    <ChevronsLeft className="z-2 ms-1.5 shrink-0 w-2.5 animate-bounce-left"/>
                </div>
            }
            <div className="flex items-center justify-center size-6 rounded-full bg-white border-2 border-yellow-500">
                <TramFront className="size-4"/>
            </div>
            { direction === 'right' &&
                <div className="-z-1 flex items-center -ms-1 w-0 h-0 border-l-18 border-yellow-500 border-t-9 border-t-transparent border-b-9 border-b-transparent">
                    <ChevronsRight className="z-2 -ms-3.5 shrink-0 w-2.5 animate-bounce-right"/>
                </div>
            }
        </div>
    );
}