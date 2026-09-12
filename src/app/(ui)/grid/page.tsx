import { CableCar } from 'lucide-react';
import { DoubleStop, Stop } from '@/app/(ui)/grid/components/stop';

export default function Page() {
    return (
        <div className="h-full w-full bg-white rounded-xl py-3 px-1 overflow-scroll overflow-x-auto">
            <div className="grid grid-flow-col auto-cols-[40px] grid-rows-[repeat(35,_40px)_30px_40px_30px_repeat(20,_40px)]">

                {/* Landmarks */}

                {/* Bascarsija */}
                <div className="row-start-32 row-end-35 col-start-97 col-end-101 bg-gray-200 rounded-2xl flex flex-col items-center justify-center italic text-sm text-primary/75">
                    <p>Baščaršija</p>
                    <p>(old town)</p>
                </div>

                {/* Vijećnica */}
                <div className="row-start-34 row-end-35 col-start-99 col-end-101 mt-2 -mb-2 -me-2 bg-gray-200 ring-4 ring-white rounded-lg flex flex-col items-center justify-center italic text-xs text-primary/75">
                    <p>City hall</p>
                </div>

                {/* Skenderija */}
                <div className="row-start-40 row-end-42 col-start-90 col-end-93 mt-4 bg-gray-200 rounded-2xl flex flex-col items-center justify-center italic text-sm text-primary/75">
                    <p>Skenderija</p>
                </div>

                {/* Koševo */}
                <div className="row-start-24 row-end-27 col-start-90 col-end-92 -ms-2 bg-gray-200 rounded-2xl flex flex-col items-center justify-center text-center italic text-sm text-primary/75">
                    Stadion Koševo
                </div>

                {/* Zetra */}
                <div className="row-start-26 row-end-28 col-start-92 col-end-93 ms-1 -me-2 bg-gray-200 rounded-lg flex flex-col items-center justify-center text-center italic text-sm text-primary/75">
                    Zetra
                </div>

                {/* Stadion Grbavica */}
                <div className="row-start-40 row-end-43 col-start-73 mx-5 col-end-76 bg-gray-200 rounded-2xl flex flex-col items-center justify-center text-center italic text-sm text-primary/75">
                    <p>Stadion Grbavica</p>
                </div>

                {/* end */}

                {/* River */}
                <div className="row-start-31 row-end-32 col-start-41 col-end-60 bg-sky-300"></div>
                <div className="row-start-31 row-end-32 col-start-60 col-end-61 bg-sky-300 rounded-tr-3xl"></div>
                <div className="row-start-32 row-end-34 col-start-60 col-end-61 bg-sky-300"></div>
                <div className="row-start-34 row-end-35 col-start-60 col-end-61 bg-sky-300 rounded-bl-3xl"></div>
                <div className="row-start-34 row-end-35 col-start-61 col-end-77 bg-sky-300"></div>
                <div className="row-start-34 row-end-35 col-start-77 col-end-78 bg-sky-300 rounded-tr-3xl"></div>
                <div className="row-start-35 row-end-37 col-start-77 col-end-78 bg-sky-300"></div>
                <div className="row-start-37 row-end-38 col-start-77 col-end-78 bg-sky-300 rounded-bl-3xl"></div>
                <div className="row-start-37 row-end-38 col-start-78 col-end-102 bg-sky-300"></div>
                {/* end */}

                {/* Bridges and connections */}

                {/* Latinska ćuprija - Trg Austrije */}
                <div className="row-start-37 row-end-38 col-start-98 col-end-99 flex justify-center">
                    <div className="h-full w-3 bg-white"></div>
                </div>
                <div className="row-start-36 row-end-39 col-start-98 col-end-99 flex items-center justify-center -my-3">
                    <div className="flex-1/2"></div>
                    <div className="h-full border-s-4 border-dotted border-gray-300"></div>
                    <div className="min-w-0 flex-1/2 flex"></div>
                </div>

                {/* Drvenija */}
                <div className="row-start-37 row-end-38 col-start-96 col-end-97 flex justify-center">
                    <div className="h-full w-3 bg-white"></div>
                </div>
                <div className="row-start-36 row-end-39 col-start-96 col-end-97 flex items-center justify-center -my-3">
                    <div className="flex-1/2"></div>
                    <div className="h-full border-s-4 border-dotted border-gray-300"></div>
                    <div className="min-w-0 flex-1/2 flex"></div>
                </div>

                {/* Socijalno - Stadion Grbavica */}
                <div className="row-start-34 row-end-35 col-start-74 col-end-75 flex justify-center">
                    <div className="h-full w-3 bg-white"></div>
                </div>
                <div className="row-start-34 row-end-39 col-start-74 col-end-75 flex items-center justify-center -my-3">
                    <div className="flex-1/2"></div>
                    <div className="h-full border-s-4 border-dotted border-gray-300"></div>
                    <div className="min-w-0 flex-1/2 flex"></div>
                </div>

                {/* Otoka */}
                <div className="row-start-34 row-end-35 col-start-65 col-end-66 flex justify-center">
                    <div className="h-full w-3 bg-white"></div>
                </div>
                <div className="row-start-34 row-end-36 col-start-65 col-end-66 flex items-center justify-center -my-3">
                    <div className="flex-1/2"></div>
                    <div className="h-full border-s-4 border-dotted border-gray-300"></div>
                    <div className="min-w-0 flex-1/2 flex"></div>
                </div>

                {/* end */}

                {/* Vijećnica <-> Cable car connection */}
                <div className="row-start-37 row-end-38 col-start-100 col-end-101 flex justify-center">
                    <div className="h-full w-3 bg-white"></div>
                </div>

                <div className="row-start-36 row-end-42 col-start-100 col-end-101 flex items-center justify-center -my-3">
                    <div className="flex-1/2"></div>
                    <div className="h-full border-s-4 border-dotted border-gray-300"></div>
                    <div className="min-w-0 flex-1/2 flex"></div>
                </div>
                {/* end */}

                {/* Cable car */}
                <div className="row-start-42 row-end-43 col-start-100 col-end-101 flex gap-1 items-center justify-center">
                    {/* Station name */}
                    <div className="min-w-0 flex-1/2 flex justify-end">
                        <div className="w-full min-w-max text-center">Sarajevo</div>
                    </div>
                    {/* Marker */}
                    <div className="h-full flex flex-col items-center gap-0.5">
                        <div className="flex-1"></div>
                        <div className="size-2 bg-gray-400 rounded-full"></div>
                        <div className="flex-1 w-1 bg-gray-400 rounded-t-xl"></div>
                    </div>
                    {/* Station signs */}
                    <div className="min-w-0 flex-1/2 flex">
                        <div className="flex items-center gap-1 justify-center">
                            <div className="bg-gray-300 rounded p-0.5">
                                <CableCar className="w-5"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row-start-43 row-end-44 col-start-100 col-end-101 flex gap-2 items-center justify-center">
                    {/* Station name */}
                    <div className="min-w-0 flex-1/2 flex justify-end">
                    </div>
                    {/* Marker */}
                    <div className="h-full flex flex-col items-center">
                        <div className="h-full border-x-2 border-dashed border-gray-400"></div>
                    </div>
                    {/* Station signs */}
                    <div className="min-w-0 flex-1/2 flex">
                        <div className="flex items-center gap-1 justify-center text-sm italic text-nowrap">
                            To Trebević mountain
                        </div>
                    </div>
                </div>

                {/* end */}


                {/* Tram - main track */}

                <div className="row-start-33 row-end-34 col-start-22 col-end-23 flex flex-col items-center justify-center">
                    {/* Station name */}
                    <div className="min-h-0 flex-1/2 flex flex-col items-center justify-end">
                        <div className="w-full min-w-max text-ellipsis text-center">Butmir 2</div>
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
                        </div>
                    </div>
                </div>

                <div className="row-start-33 row-end-34 col-start-23 col-end-25 flex items-center">
                    <div className="h-1 w-full bg-yellow-500"></div>
                </div>

                <div className="row-start-33 row-end-34 col-start-25 col-end-26 flex flex-col items-center justify-center">
                    {/* Station name */}
                    <div className="min-h-0 flex-1/2 flex flex-col items-center justify-end">
                        <div className="w-full min-w-max text-ellipsis text-center">Butmir 1</div>
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
                        </div>
                    </div>
                </div>

                <div className="row-start-33 row-end-34 col-start-26 col-end-28 flex items-center">
                    <div className="h-1 w-full bg-yellow-500"></div>
                </div>

                <div className="row-start-33 row-end-34 col-start-28 col-end-29 flex flex-col items-center justify-center">
                    {/* Station name */}
                    <div className="min-h-0 flex-1/2 flex flex-col items-center justify-end">
                        <div className="w-full min-w-max text-ellipsis text-center">Terme</div>
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
                        </div>
                    </div>
                </div>

                <div className="row-start-33 row-end-34 col-start-29 col-end-31 flex items-center">
                    <div className="h-1 w-full bg-yellow-500"></div>
                </div>

                <div className="row-start-33 row-end-34 col-start-31 col-end-32 flex flex-col gap-1 items-center justify-center">
                    {/* Station name */}
                    <div className="min-h-0 flex-1/2 flex flex-col items-center justify-end">
                        <div className="w-full min-w-max text-ellipsis text-center bg-yellow-500 px-1 py-0.5 font-bold rounded-lg">Ilidža</div>
                    </div>
                    {/* Marker */}
                    <div className="w-full flex items-center gap-0.5">
                        <div className="flex-1 h-1 bg-yellow-500 rounded-e-xl"></div>
                        <div className="size-2 bg-yellow-500 rounded-full"></div>
                        <div className="flex-1 h-1 bg-yellow-500 rounded-s-xl"></div>
                    </div>
                    {/* Station signs */}
                    <div className="min-h-0 flex-1/2 flex items-start justify-center">
                        <div className="flex items-center gap-1 justify-center">
                            <div className="shrink-0 w-5 text-center rounded bg-yellow-500 text-lg font-bold">3</div>
                            <div className="shrink-0 w-5 text-center rounded bg-yellow-500 text-lg font-bold">4</div>
                            <div className="shrink-0 w-5 text-center rounded bg-yellow-500 text-lg font-bold">6</div>
                        </div>
                    </div>
                </div>

                <div className="row-start-33 row-end-34 col-start-32 col-end-34 flex items-center">
                    <div className="h-1 w-full bg-yellow-500"></div>
                </div>

                <div className="row-start-33 row-end-34 col-start-34 col-end-35 flex flex-col items-center justify-center">
                    {/* Station name */}
                    <div className="min-h-0 flex-1/2 flex flex-col items-center justify-end">
                        <div className="w-full min-w-max text-ellipsis text-center">Kasindolska</div>
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
                        </div>
                    </div>
                </div>

                <div className="row-start-33 row-end-34 col-start-35 col-end-37 flex items-center">
                    <div className="h-1 w-full bg-yellow-500"></div>
                </div>

                <div className="row-start-33 row-end-34 col-start-37 col-end-38 flex flex-col items-center justify-center">
                    {/* Station name */}
                    <div className="min-h-0 flex-1/2 flex flex-col items-center justify-end">
                        <div className="w-full min-w-max text-ellipsis text-center">Energoinvest</div>
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
                        </div>
                    </div>
                </div>

                <div className="row-start-33 row-end-34 col-start-38 col-end-40 flex items-center">
                    <div className="h-1 w-full bg-yellow-500"></div>
                </div>

                <div className="row-start-33 row-end-34 col-start-40 col-end-41 flex flex-col items-center justify-center">
                    {/* Station name */}
                    <div className="min-h-0 flex-1/2 flex flex-col items-center justify-end">
                        <div className="w-full min-w-max text-ellipsis text-center">Bulevar</div>
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
                        </div>
                    </div>
                </div>

                <div className="row-start-33 row-end-34 col-start-41 col-end-43 flex items-center">
                    <div className="h-1 w-full bg-yellow-500"></div>
                </div>

                <div className="row-start-33 row-end-34 col-start-43 col-end-44 flex flex-col items-center justify-center">
                    {/* Station name */}
                    <div className="min-h-0 flex-1/2 flex flex-col items-center justify-end">
                        <div className="w-full min-w-max text-ellipsis text-center">Stup</div>
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
                        </div>
                    </div>
                </div>

                <div className="row-start-33 row-end-34 col-start-44 col-end-46 flex items-center">
                    <div className="h-1 w-full bg-yellow-500"></div>
                </div>

                <Stop name={'Avaz'} type={'tram'} row={33} col={46}/>

                <div className="row-start-33 row-end-34 col-start-47 col-end-48 flex items-center">
                    <div className="h-1 w-full bg-yellow-500"></div>
                </div>

                <Stop name={'Nedžarići\nokretn.'} type={'tram'} row={33} col={48} lines={['5']}/>

                <div className="row-start-33 row-end-34 col-start-49 col-end-50 flex items-center">
                    <div className="h-1 w-full bg-yellow-500"></div>
                </div>

                <Stop name={'Avaz'} type={'tram'} row={33} col={50}/>

                <div className="row-start-33 row-end-34 col-start-51 col-end-53 flex items-center">
                    <div className="h-1 w-full bg-yellow-500"></div>
                </div>

                <Stop name={'Nedžarići'} type={'tram'} row={33} col={53}/>

                <div className="row-start-33 row-end-34 col-start-54 col-end-56 flex items-center">
                    <div className="h-1 w-full bg-yellow-500"></div>
                </div>

                <Stop name={'Alipašino Polje'} type={'tram'} row={33} col={56}/>

                <div className="row-start-33 row-end-34 col-start-57 col-end-59 flex items-center">
                    <div className="h-1 w-full bg-yellow-500"></div>
                </div>

                <div className="row-start-33 row-end-34 col-start-60 col-end-61 flex flex-col justify-center">
                    <div className="h-1 w-full bg-white"></div>
                    <div className="h-1 w-full bg-yellow-500"></div>
                    <div className="h-1 w-full bg-white"></div>
                </div>

                <Stop name={'RTV'} type={'tram'} row={33} col={59}/>

                <div className="row-start-33 row-end-34 col-start-61 col-end-62 flex items-center">
                    <div className="h-1 w-full bg-yellow-500"></div>
                </div>

                <Stop name={'Alipašin Most'} type={'tram'} row={33} col={62}/>

                <div className="row-start-33 row-end-34 col-start-63 col-end-65 flex items-center">
                    <div className="h-1 w-full bg-yellow-500"></div>
                </div>

                <Stop name={'Otoka'} type={'tram'} row={33} col={65}/>

                <div className="row-start-33 row-end-34 col-start-66 col-end-68 flex items-center">
                    <div className="h-1 w-full bg-yellow-500"></div>
                </div>

                <Stop name={'Čengić Vila'} type={'tram'} row={33} col={68} lines={['2']} labelPos={'bottom'}/>

                <div className="row-start-33 row-end-34 col-start-69 col-end-71 flex items-center">
                    <div className="h-1 w-full bg-yellow-500"></div>
                </div>

                <Stop name={'Dolac Malta'} type={'tram'} row={33} col={71}/>

                <div className="row-start-33 row-end-34 col-start-72 col-end-74 flex items-center">
                    <div className="h-1 w-full bg-yellow-500"></div>
                </div>

                <Stop name={'Socijalno'} type={'tram'} row={33} col={74}/>

                <div className="row-start-33 row-end-34 col-start-75 col-end-77 flex items-center">
                    <div className="h-1 w-full bg-yellow-500"></div>
                </div>

                <Stop name={'Pofalići'} type={'tram'} row={33} col={77}/>

                <div className="row-start-33 row-end-34 col-start-78 col-end-80 flex items-center">
                    <div className="h-1 w-full bg-yellow-500"></div>
                </div>

                <Stop name={'Univerzitet'} type={'tram'} row={33} col={80}/>

                <div className="row-start-33 row-end-34 col-start-81 col-end-82 flex items-center">
                    <div className="h-1 w-full bg-yellow-500"></div>
                </div>

                <Stop name={'Tehnička škola'} type={'tram'} row={33} col={82} labelPos={'bottom'}/>

                <div className="row-start-33 row-end-34 col-start-83 col-end-84 flex items-center">
                    <div className="h-1 w-full bg-yellow-500"></div>
                </div>

                <Stop name={'Muzeji'} type={'tram'} row={33} col={84}/>

                <div className="row-start-33 row-end-34 col-start-85 col-end-86 flex items-center">
                    <div className="h-1 w-full bg-yellow-500"></div>
                </div>

                <Stop name={'Marijin Dvor'} type={'tram'} row={33} col={86}/>

                <div className="row-start-33 row-end-34 col-start-87 col-end-88 flex items-center">
                    <div className="h-1 w-full bg-yellow-500"></div>
                </div>
                {/* end */}

                {/* Tram - fork to z. stanica */}
                <Stop direction={'vertical'} name={'Željeznička stanica'} lines={['1', '4']} terminus={'top'} type={'tram'} row={29} col={83} labelPos={'right'}/>

                <div className="row-start-30 row-end-31 col-start-83 col-end-84 flex justify-center">
                    <div className="w-1 h-full bg-yellow-500"></div>
                </div>

                <Stop direction={'vertical'} name={'Tehnička škola'} type={'tram'} row={31} col={83} labelPos={'right'}/>

                <div className="row-start-32 row-end-33 col-start-83 col-end-84 flex justify-center">
                    <div className="w-1 h-full bg-yellow-500"></div>
                </div>

                <div className="row-start-33 row-end-34 col-start-83 col-end-84 flex flex-col">
                    <div className="relative flex flex-1">
                        <div className="absolute bottom-0 w-full border-t-4 border-yellow-500"></div>
                        <div className="w-[calc(50%+0.125rem)] h-full border-b-4 border-e-4 border-yellow-500 rounded-br-2xl"></div>
                        <div className="w-[calc(50%+0.125rem)] h-full -ms-1 border-s-4 border-b-4 border-yellow-500 rounded-bl-2xl"></div>
                    </div>
                    <div className="h-[calc(50%-0.125rem)]"></div>
                </div>
                {/* end */}

                {/* Bottom fork to 2-fork subfork */}
                <div className="row-start-18 row-end-19 col-start-4 col-end-5 flex flex-col">
                    <div className="h-[calc(50%-0.125rem)]"></div>
                    <div className="relative flex flex-1">
                        <div className="absolute w-full border-t-4 border-yellow-500"></div>
                        <div className="w-[calc(50%+0.125rem)] h-full border-t-4 border-e-4 border-yellow-500 rounded-tr-2xl"></div>
                        <div className="w-[calc(50%+0.125rem)] h-full -ms-1 border-s-4 border-t-4 border-yellow-500 rounded-tl-2xl"></div>
                    </div>
                </div>

                <div className="row-start-19 row-end-20 col-start-4 col-end-5 flex justify-center">
                    <div className="w-1 h-full bg-yellow-500"></div>
                </div>

                {/* subfork - entrance */}
                <div className="row-start-35 row-end-36 col-start-2 col-end-3 flex flex-col items-end">
                    <div className="flex-1"></div>
                    <div className="w-[calc(50%+0.125rem)] h-[calc(50%+0.125rem)] border-s-4 border-t-4 border-yellow-500 rounded-tl-xl"></div>
                </div>

                <div className="row-start-35 row-end-36 col-start-3 col-end-4 flex items-center">
                    <div className="w-full h-1 bg-yellow-500"></div>
                </div>

                <div className="row-start-35 row-end-36 col-start-4 col-end-5 flex flex-col">
                    <div className="flex flex-1">
                        <div className="w-[calc(50%+0.125rem)] h-full border-b-4 border-r-4 border-yellow-500 rounded-br-xl"></div>
                        <div className="w-[calc(50%+0.125rem)] h-full -ms-1 border-s-4 border-b-4 border-yellow-500 rounded-bl-xl"></div>
                    </div>
                    <div className="h-[calc(50%-0.125rem)]"></div>
                </div>

                <div className="row-start-35 row-end-36 col-start-5 col-end-6 flex items-center">
                    <div className="w-full h-1 bg-yellow-500"></div>
                </div>

                <div className="row-start-35 row-end-36 col-start-6 col-end-7 flex flex-col">
                    <div className="flex-1"></div>
                    <div className="w-[calc(50%+0.125rem)] h-[calc(50%+0.125rem)] border-t-4 border-e-4 border-yellow-500 rounded-tr-xl"></div>
                </div>
                {/* end */}

                {/* subfork - left branch */}
                <div className="row-start-21 row-end-22 col-start-2 col-end-3 flex justify-center">
                    <div className="w-1 h-full bg-yellow-500"></div>
                </div>
                {/* end */}

                {/* subfork - right branch */}
                <div className="row-start-21 row-end-22 col-start-6 col-end-7 flex justify-center">
                    <div className="w-1 h-full bg-yellow-500"></div>
                </div>
                {/* end */}

                {/* subfork - closure with station */}
                <div className="row-start-22 row-end-23 col-start-2 col-end-3 flex flex-col items-end">
                    <div className="w-[calc(50%+0.125rem)] h-[calc(50%+0.125rem)] border-s-4 border-b-4 border-yellow-500 rounded-bl-xl"></div>
                </div>

                <div className="row-start-22 row-end-23 col-start-3 col-end-4 flex items-center">
                    <div className="w-full h-1 bg-yellow-500"></div>
                </div>

                <div className="row-start-22 row-end-23 col-start-4 col-end-5 flex flex-col gap-1 items-center justify-center">
                    {/* Station signs */}
                    <div className="min-h-0 flex-1/2 flex items-end justify-center">
                        <div className="flex items-center gap-1 justify-center">
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
                        <div className="w-full min-w-max text-ellipsis text-center bg-yellow-500 px-1 py-0.5 font-bold rounded-lg">Stanica</div>
                    </div>
                </div>

                <div className="row-start-22 row-end-23 col-start-5 col-end-6 flex items-center">
                    <div className="w-full h-1 bg-yellow-500"></div>
                </div>

                <div className="row-start-22 row-end-23 col-start-6 col-end-7 flex flex-col">
                    <div className="w-[calc(50%+0.125rem)] h-[calc(50%+0.125rem)] border-b-4 border-e-4 border-yellow-500 rounded-br-xl"></div>
                </div>
                {/* end */}
                {/* end */}

                {/* Trolleybus - main route */}

                <Stop name={'Dobrinja škola'} type={'trolley'} row={48} col={56} labelPos={'bottom'}/>

                {/* TODO connection/turn */}

                <Stop direction={'vertical'} name={'Dobrinja III'} type={'trolley'} row={44} col={53}/>

                {/* TODO connection */}

                <Stop direction={'vertical'} name={'X Transverzala'} type={'trolley'} row={42} col={53}/>

                {/* TODO connection / turn */}

                <Stop name={'Alipašino\nPolje II'} type={'trolley'} row={39} col={54} labelPos={'bottom'}/>

                <div className="row-start-39 row-end-40 col-start-55 col-end-56 flex items-center">
                    <div className="w-full h-1 bg-red-500"></div>
                </div>

                <Stop name={'Mojmilo'} type={'trolley'} row={39} col={56} labelPos={'bottom'}/>

                <div className="row-start-39 row-end-40 col-start-57 col-end-58 flex items-center">
                    <div className="w-full h-1 bg-red-500"></div>
                </div>

                <Stop name={'Alipašino\nPolje I'} type={'trolley'} row={39} col={58} labelPos={'bottom'}/>

                <div className="row-start-39 row-end-40 col-start-59 col-end-60 flex items-center">
                    <div className="w-full h-1 bg-red-500"></div>
                </div>

                <Stop name={'Švrakino Selo'} type={'trolley'} row={39} col={60} labelPos={'bottom'}/>

                <div className="row-start-39 row-end-40 col-start-61 col-end-63 flex items-center">
                    <div className="w-full h-1 bg-red-500"></div>
                </div>

                <Stop name={'Švrakino Selo I'} type={'trolley'} row={39} col={63} labelPos={'bottom'}/>

                <div className="row-start-39 row-end-40 col-start-64 col-end-67 flex items-center">
                    <div className="w-full h-1 bg-red-500"></div>
                </div>

                <Stop name={'Aneks'} type={'trolley'} row={39} col={66} labelPos={'bottom'}/>

                <div className="row-start-39 row-end-40 col-start-67 col-end-68 flex items-center">
                    <div className="w-full h-1 bg-red-500"></div>
                </div>

                <Stop name={'Hrasno I'} type={'trolley'} row={39} col={68} labelPos={'bottom'}/>

                <div className="row-start-39 row-end-40 col-start-69 col-end-70 flex items-center">
                    <div className="w-full h-1 bg-red-500"></div>
                </div>

                <Stop name={'Safeta\nHadžića'} type={'trolley'} row={39} col={70} labelPos={'bottom'}/>

                <div className="row-start-39 row-end-40 col-start-71 col-end-72 flex items-center">
                    <div className="w-full h-1 bg-red-500"></div>
                </div>

                <Stop name={'Kružni tok\nHrasno'} type={'trolley'} row={39} col={72} labelPos={'bottom'}/>

                <div className="row-start-39 row-end-40 col-start-73 col-end-74 flex items-center">
                    <div className="w-full h-1 bg-red-500"></div>
                </div>

                <Stop name={'Stadion Grbavica'} type={'trolley'} row={39} col={74}/>

                <div className="row-start-39 row-end-40 col-start-75 col-end-77 flex items-center">
                    <div className="w-full h-1 bg-red-500"></div>
                </div>

                <Stop name={'Grbavica I'} type={'trolley'} row={39} col={77} labelPos={'bottom'}/>

                <div className="row-start-39 row-end-40 col-start-78 col-end-81 flex items-center">
                    <div className="w-full h-1 bg-red-500"></div>
                </div>

                <Stop name={'Zagrebačka'} type={'trolley'} row={39} col={81} labelPos={'bottom'}/>

                <div className="row-start-39 row-end-40 col-start-82 col-end-85 flex items-center">
                    <div className="w-full h-1 bg-red-500"></div>
                </div>

                <Stop name={'Kovačići'} type={'trolley'} row={39} col={85} labelPos={'bottom'}/>

                <div className="row-start-39 row-end-40 col-start-86 col-end-90 flex items-center">
                    <div className="w-full h-1 bg-red-500"></div>
                </div>

                <Stop name={'Skenderija'} type={'trolley'} row={39} col={90} labelPos={'bottom'}/>

                <div className="row-start-39 row-end-40 col-start-91 col-end-92 flex items-center">
                    <div className="w-full h-1 bg-red-500"></div>
                </div>

                <Stop name={'Skenderija'} type={'trolley'} row={39} col={92} labelPos={'bottom'}/>

                <div className="row-start-39 row-end-40 col-start-93 col-end-94 flex items-center">
                    <div className="w-full h-1 bg-red-500"></div>
                </div>

                <DoubleStop name1={'Hidrogradnja'} name2={'Čobanija'} type={'trolley'} row={39} col={94}/>

                <div className="row-start-39 row-end-40 col-start-95 col-end-96 flex items-center">
                    <div className="w-full h-1 bg-red-500"></div>
                </div>

                <Stop name={'Drvenija'} type={'trolley'} row={39} col={96} labelPos={'bottom'}/>

                <div className="row-start-39 row-end-40 col-start-97 col-end-98 flex items-center">
                    <div className="w-full h-1 bg-red-500"></div>
                </div>

                <Stop name={'Trg\nAustrije'} lines={['101', '103', '105']} terminus={'right'} type={'trolley'} row={39} col={98} labelPos={'bottom'}/>
                {/* end */}

                {/* Trolleybus - main road fork to Otoka */}
                <Stop name={'Otoka'} lines={['101', '102', '108']} terminus={'left'} type={'trolley'} row={36} col={65}/>

                <div className="row-start-36 row-end-37 col-start-66 col-end-68 flex items-center">
                    <div className="w-full h-1 bg-red-500"></div>
                </div>

                <Stop name={'A. B. Šimića'} type={'trolley'} row={36} col={68}/>

                <div className="row-start-36 row-end-37 col-start-69 col-end-70 flex items-center">
                    <div className="w-full h-1 bg-red-500"></div>
                </div>

                <Stop name={'Hrasno'} type={'trolley'} row={36} col={70}/>

                <div className="row-start-36 row-end-37 col-start-71 col-end-72 flex flex-col">
                    <div className="flex-1"></div>
                    <div className="size-[calc(50%+0.125rem)] border-t-4 border-e-4 rounded-tr-2xl border-red-500"></div>
                </div>

                <div className="row-start-37 row-end-38 col-start-71 col-end-72 flex justify-center">
                    <div className="h-full w-1 bg-red-500"></div>
                </div>

                <Stop direction={'vertical'} name={'A. Šaćirbegović'} type={'trolley'} row={38} col={71}/>

                <div className="row-start-39 row-end-40 col-start-71 col-end-72 flex flex-col">
                    <div className="relative flex flex-1">
                        <div className="absolute bottom-0 w-full border-t-4 border-red-500"></div>
                        <div className="w-[calc(50%+0.125rem)] h-full border-b-4 border-e-4 border-red-500 rounded-br-2xl"></div>
                        <div className="w-[calc(50%+0.125rem)] h-full -ms-1 border-s-4 border-b-4 border-red-500 rounded-bl-2xl"></div>
                    </div>
                    <div className="h-[calc(50%-0.125rem)]"></div>
                </div>
                {/* end */}

                <Stop direction={'vertical'} name={'Alipašina'} type={'trolley'} row={29} col={91}/>

                <div className="row-start-30 row-end-34 col-start-91 col-end-92 flex justify-center">
                    <div className="h-full w-1 bg-red-500"></div>
                </div>

                <Stop direction={'vertical'} name={'Hamza Hume'} type={'trolley'} row={34} col={91} labelPos={'right'}/>

                <div className="row-start-35 row-end-36 col-start-91 col-end-92 flex flex-col">
                    <div className="h-[calc(50%+0.125rem)] flex justify-center">
                        <div className="w-1 h-full bg-red-500"></div>
                    </div>
                    <div className="grow flex justify-center">
                        <div className="w-1 h-full bg-red-500"></div>
                    </div>
                </div>

                <div className="row-start-36 row-end-37 col-start-91 col-end-92 flex justify-center">
                    <div className="h-full w-1 bg-red-500"></div>
                </div>

                <div className="row-start-37 row-end-38 col-start-91 col-end-92 flex justify-center">
                    <div className="h-full w-1 bg-white"></div>
                    <div className="h-full w-1 bg-red-500"></div>
                    <div className="h-full w-1 bg-white"></div>
                </div>

                <div className="row-start-38 row-end-39 col-start-91 col-end-92 flex justify-center">
                    <div className="h-full w-1 bg-red-500"></div>
                </div>

                <div className="row-start-39 row-end-40 col-start-91 col-end-92 flex flex-col">
                    <div className="relative flex flex-1">
                        <div className="absolute bottom-0 w-full border-b-4 border-red-500"></div>
                        <div className="w-[calc(50%+0.125rem)] h-full border-b-4 border-e-4 border-red-500 rounded-br-2xl"></div>
                        <div className="w-[calc(50%+0.125rem)] h-full -ms-1 border-s-4 border-b-4 border-red-500 rounded-bl-2xl"></div>
                    </div>
                    <div className="h-[calc(50%-0.125rem)]"></div>
                </div>
                {/* end */}

                {/* 2-track fork - entrance */}
                <div className="row-start-31 row-end-32 col-start-88 col-end-89 flex flex-col items-end justify-end">
                    <div className="w-[calc(50%+0.125rem)] h-[calc(50%+0.125rem)] border-s-4 border-t-4 border-yellow-500 rounded-tl-xl"></div>
                </div>

                <div className="row-start-32 row-end-33 col-start-88 col-end-89 relative flex justify-center">
                    <div className="w-1 bg-yellow-500"></div>
                </div>

                <div className="row-start-33 row-end-34 col-start-88 col-end-89 flex flex-col">
                    <div className="w-[calc(50%+0.125rem)] h-[calc(50%+0.125rem)] border-e-4 border-b-4 border-yellow-500 rounded-br-xl"></div>
                    <div className="-mt-1 w-[calc(50%+0.125rem)] h-[calc(50%+0.125rem)] border-t-4 border-e-4 border-yellow-500 rounded-tr-xl"></div>
                </div>

                <div className="row-start-34 row-end-35 col-start-88 col-end-89 relative flex justify-center">
                    <div className="w-1 bg-yellow-500"></div>
                </div>

                <div className="row-start-35 row-end-36 col-start-88 col-end-89 flex flex-col items-end">
                    <div className="w-[calc(50%+0.125rem)] h-[calc(50%+0.125rem)] border-l-4 border-b-4 border-yellow-500 rounded-bl-xl"></div>
                </div>
                {/* end */}

                {/* Fork - top branch */}
                <div className="row-start-31 row-end-32 col-start-89 col-end-92 flex items-center">
                    <div className="h-1 w-full bg-yellow-500"></div>
                </div>

                <Stop name={'Park'} type={'tram'} row={31} col={92}/>

                <div className="row-start-31 row-end-32 col-start-93 col-end-95 flex items-center">
                    <div className="h-1 w-full bg-yellow-500"></div>
                </div>

                <Stop name={'Banka'} type={'tram'} row={31} col={95}/>

                <div className="row-start-31 row-end-32 col-start-96 col-end-99 flex items-center">
                    <div className="h-1 w-full bg-yellow-500"></div>
                </div>

                <Stop name={'Katedrala'} type={'tram'} row={31} col={99}/>

                <div className="row-start-31 row-end-32 col-start-100 col-end-101 flex items-center">
                    <div className="h-1 w-full bg-yellow-500"></div>
                </div>
                {/* end */}

                {/* Fork - bottom branch */}
                <div className="row-start-35 row-end-36 col-start-89 col-end-92 flex items-center">
                    <div className="h-1 w-full bg-yellow-500"></div>
                </div>

                <Stop name={'Skenderija'} type={'tram'} row={35} col={92} labelPos={'bottom'}/>

                <div className="row-start-35 row-end-36 col-start-93 col-end-94 flex items-center">
                    <div className="h-1 w-full bg-yellow-500"></div>
                </div>

                <Stop name={'Pošta'} type={'tram'} row={35} col={94}/>

                <div className="row-start-35 row-end-36 col-start-95 col-end-96 flex items-center">
                    <div className="h-1 w-full bg-yellow-500"></div>
                </div>

                <Stop name={'Drvenija'} type={'tram'} row={35} col={96}/>

                <div className="row-start-35 row-end-36 col-start-97 col-end-98 flex items-center">
                    <div className="h-1 w-full bg-yellow-500"></div>
                </div>

                <Stop name={'Latinska\nćuprija'} type={'tram'} row={35} col={98} labelPos={'bottom'}/>

                <div className="row-start-35 row-end-36 col-start-99 col-end-100 flex items-center">
                    <div className="h-1 w-full bg-yellow-500"></div>
                </div>

                <Stop name={'Vijećnica'} type={'tram'} row={35} col={100} labelPos={'bottom'}/>
                {/* end */}

                {/* 2-track connector with station */}
                <div className="row-start-31 row-end-32 col-start-90 col-end-91 relative flex flex-col justify-end">
                    <div className="absolute top-1/2 translate-y-[-0.125rem] w-full border-t-4 border-yellow-500"></div>
                    <div className="w-[calc(50%+0.125rem)] h-[calc(50%+0.125rem)] border-t-4 border-e-4 border-yellow-500 rounded-tr-xl"></div>
                </div>

                <div className="row-start-32 row-end-33 col-start-90 col-end-91 relative flex justify-center">
                    <div className="w-1 bg-yellow-500"></div>
                </div>

                <Stop direction={'vertical'} name={'Skenderija'} lines={['6']} type={'tram'} row={33} col={90} labelPos={'right'}/>

                <div className="row-start-34 row-end-35 col-start-90 col-end-91 relative flex justify-center">
                    <div className="w-1 bg-yellow-500"></div>
                </div>

                <div className="row-start-35 row-end-36 col-start-90 col-end-91 relative flex flex-col">
                    <div className="absolute top-1/2 -translate-y-0.5 w-full border-b-4 border-yellow-500"></div>
                    <div className="w-[calc(50%+0.125rem)] h-[calc(50%+0.125rem)] border-e-4 border-b-4 border-yellow-500 rounded-br-xl"></div>
                </div>
                {/* end */}

                {/* 2-track end connector with station */}
                <div className="row-start-31 row-end-32 col-start-101 col-end-102 flex flex-col justify-end">
                    <div className="w-[calc(50%+0.125rem)] h-[calc(50%+0.125rem)] border-t-4 border-e-4 border-yellow-500 rounded-tr-xl"></div>
                </div>

                <div className="row-start-32 row-end-33 col-start-101 col-end-102 relative flex justify-center">
                    <div className="w-1 bg-yellow-500"></div>
                </div>

                <div className="row-start-33 row-end-34 col-start-101 col-end-102 flex gap-1 items-center justify-center">
                    {/* Station signs */}
                    <div className="min-w-0 flex-1/2 flex justify-end">
                        <div className="flex flex-col items-center gap-1 justify-center">
                            <div className="flex gap-1">
                                <div className="shrink-0 w-5 text-center rounded bg-yellow-500 text-lg font-bold">1</div>
                                <div className="shrink-0 w-5 text-center rounded bg-yellow-500 text-lg font-bold">2</div>
                            </div>
                            <div className="flex gap-1">
                                <div className="shrink-0 w-5 text-center rounded bg-yellow-500 text-lg font-bold">3</div>
                                <div className="shrink-0 w-5 text-center rounded bg-yellow-500 text-lg font-bold">5</div>
                            </div>
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
                        <div className="w-full min-w-max text-center bg-yellow-500 px-1 py-0.5 font-bold rounded-lg">Baščaršija</div>
                    </div>
                </div>

                <div className="row-start-34 row-end-35 col-start-101 col-end-102 relative flex justify-center">
                    <div className="w-1 bg-yellow-500"></div>
                </div>

                <div className="row-start-35 row-end-36 col-start-101 col-end-102 flex flex-col">
                    <div className="w-[calc(50%+0.125rem)] h-[calc(50%+0.125rem)] border-e-4 border-b-4 border-yellow-500 rounded-br-xl"></div>
                </div>
                {/* end */}

                {/* Trolleybus - left fork */}
                <div className="row-start-1 row-end-2 col-start-89 col-end-90 flex gap-1 items-center justify-center">
                    {/* Station name */}
                    <div className="min-w-0 flex-1/2 flex justify-end">
                        <div className="w-full min-w-max text-center bg-red-500 text-white px-1 py-0.5 font-bold rounded-lg">Vogošća Terminal</div>
                    </div>
                    {/* Marker */}
                    <div className="h-full flex flex-col items-center gap-0.5">
                        <div className="flex-1"></div>
                        <div className="size-2 bg-red-500 rounded-full"></div>
                        <div className="flex-1 w-1 bg-red-500 rounded-t-xl"></div>
                    </div>
                    {/* Station signs */}
                    <div className="min-w-0 flex-1/2 flex">
                        <div className="flex items-center gap-1 justify-center">
                            <div className="shrink-0 w-10 text-center rounded bg-red-500 text-white text-lg font-bold">105</div>
                        </div>
                    </div>
                </div>

                <div className="row-start-2 row-end-3 col-start-89 col-end-90 flex justify-center">
                    <div className="h-full w-1 bg-red-500"></div>
                </div>

                <div className="row-start-3 row-end-4 col-start-89 col-end-90 flex gap-1 items-center justify-center">
                    {/* Station name */}
                    <div className="min-w-0 flex-1/2 flex justify-end">
                        <div className="w-full min-w-max text-center">Vogošća</div>
                    </div>
                    {/* Marker */}
                    <div className="h-full flex flex-col items-center gap-0.5">
                        <div className="flex-1 w-1 bg-red-500 rounded-b-xl"></div>
                        <div className="size-2 bg-red-500 rounded-full"></div>
                        <div className="flex-1 w-1 bg-red-500 rounded-t-xl"></div>
                    </div>
                    {/* Station signs */}
                    <div className="min-w-0 flex-1/2 flex">
                        <div className="flex items-center gap-1 justify-center">
                        </div>
                    </div>
                </div>

                <div className="row-start-4 row-end-5 col-start-89 col-end-90 flex justify-center">
                    <div className="h-full w-1 bg-red-500"></div>
                </div>

                <div className="row-start-5 row-end-6 col-start-89 col-end-90 flex gap-1 items-center justify-center">
                    {/* Station name */}
                    <div className="min-w-0 flex-1/2 flex justify-end">
                        <div className="w-full min-w-max text-center">Biokovo</div>
                    </div>
                    {/* Marker */}
                    <div className="h-full flex flex-col items-center gap-0.5">
                        <div className="flex-1 w-1 bg-red-500 rounded-b-xl"></div>
                        <div className="size-2 bg-red-500 rounded-full"></div>
                        <div className="flex-1 w-1 bg-red-500 rounded-t-xl"></div>
                    </div>
                    {/* Station signs */}
                    <div className="min-w-0 flex-1/2 flex">
                        <div className="flex items-center gap-1 justify-center">
                        </div>
                    </div>
                </div>

                <div className="row-start-6 row-end-7 col-start-89 col-end-90 flex justify-center">
                    <div className="h-full w-1 bg-red-500"></div>
                </div>

                <div className="row-start-7 row-end-8 col-start-89 col-end-90 flex gap-1 items-center justify-center">
                    {/* Station name */}
                    <div className="min-w-0 flex-1/2 flex justify-end">
                        <div className="w-full min-w-max text-center">Sportska dvorana</div>
                    </div>
                    {/* Marker */}
                    <div className="h-full flex flex-col items-center gap-0.5">
                        <div className="flex-1 w-1 bg-red-500 rounded-b-xl"></div>
                        <div className="size-2 bg-red-500 rounded-full"></div>
                        <div className="flex-1 w-1 bg-red-500 rounded-t-xl"></div>
                    </div>
                    {/* Station signs */}
                    <div className="min-w-0 flex-1/2 flex">
                        <div className="flex items-center gap-1 justify-center">
                        </div>
                    </div>
                </div>

                <div className="row-start-8 row-end-9 col-start-89 col-end-90 flex justify-center">
                    <div className="h-full w-1 bg-red-500"></div>
                </div>

                <div className="row-start-9 row-end-10 col-start-89 col-end-90 flex gap-1 items-center justify-center">
                    {/* Station name */}
                    <div className="min-w-0 flex-1/2 flex justify-end">
                        <div className="w-full min-w-max text-center">TAS</div>
                    </div>
                    {/* Marker */}
                    <div className="h-full flex flex-col items-center gap-0.5">
                        <div className="flex-1 w-1 bg-red-500 rounded-b-xl"></div>
                        <div className="size-2 bg-red-500 rounded-full"></div>
                        <div className="flex-1 w-1 bg-red-500 rounded-t-xl"></div>
                    </div>
                    {/* Station signs */}
                    <div className="min-w-0 flex-1/2 flex">
                        <div className="flex items-center gap-1 justify-center">
                        </div>
                    </div>
                </div>

                <div className="row-start-10 row-end-11 col-start-89 col-end-90 flex justify-center">
                    <div className="h-full w-1 bg-red-500"></div>
                </div>

                <div className="row-start-11 row-end-12 col-start-89 col-end-90 flex gap-1 items-center justify-center">
                    {/* Station name */}
                    <div className="min-w-0 flex-1/2 flex justify-end">
                        <div className="w-full min-w-max text-center">Jošanica</div>
                    </div>
                    {/* Marker */}
                    <div className="h-full flex flex-col items-center gap-0.5">
                        <div className="flex-1 w-1 bg-red-500 rounded-b-xl"></div>
                        <div className="size-2 bg-red-500 rounded-full"></div>
                        <div className="flex-1 w-1 bg-red-500 rounded-t-xl"></div>
                    </div>
                    {/* Station signs */}
                    <div className="min-w-0 flex-1/2 flex">
                        <div className="flex items-center gap-1 justify-center">
                        </div>
                    </div>
                </div>

                <div className="row-start-12 row-end-13 col-start-89 col-end-90 flex justify-center">
                    <div className="h-full w-1 bg-red-500"></div>
                </div>

                <div className="row-start-13 row-end-14 col-start-89 col-end-90 flex gap-1 items-center justify-center">
                    {/* Station name */}
                    <div className="min-w-0 flex-1/2 flex justify-end">
                        <div className="w-full min-w-max text-center">Barica</div>
                    </div>
                    {/* Marker */}
                    <div className="h-full flex flex-col items-center gap-0.5">
                        <div className="flex-1 w-1 bg-red-500 rounded-b-xl"></div>
                        <div className="size-2 bg-red-500 rounded-full"></div>
                        <div className="flex-1 w-1 bg-red-500 rounded-t-xl"></div>
                    </div>
                    {/* Station signs */}
                    <div className="min-w-0 flex-1/2 flex">
                        <div className="flex items-center gap-1 justify-center">
                        </div>
                    </div>
                </div>

                <div className="row-start-14 row-end-15 col-start-89 col-end-90 flex justify-center">
                    <div className="h-full w-1 bg-red-500"></div>
                </div>

                <div className="row-start-15 row-end-16 col-start-89 col-end-90 flex gap-1 items-center justify-center">
                    {/* Station name */}
                    <div className="min-w-0 flex-1/2 flex justify-end">
                        <div className="w-full min-w-max text-center">Donji Hotonj</div>
                    </div>
                    {/* Marker */}
                    <div className="h-full flex flex-col items-center gap-0.5">
                        <div className="flex-1 w-1 bg-red-500 rounded-b-xl"></div>
                        <div className="size-2 bg-red-500 rounded-full"></div>
                        <div className="flex-1 w-1 bg-red-500 rounded-t-xl"></div>
                    </div>
                    {/* Station signs */}
                    <div className="min-w-0 flex-1/2 flex">
                        <div className="flex items-center gap-1 justify-center">
                        </div>
                    </div>
                </div>

                <div className="row-start-16 row-end-17 col-start-89 col-end-90 flex justify-center">
                    <div className="h-full w-1 bg-red-500"></div>
                </div>

                <div className="row-start-17 row-end-18 col-start-89 col-end-90 flex gap-1 items-center justify-center">
                    {/* Station name */}
                    <div className="min-w-0 flex-1/2 flex justify-end">
                        <div className="w-full min-w-max text-center">Gornji Hotonj</div>
                    </div>
                    {/* Marker */}
                    <div className="h-full flex flex-col items-center gap-0.5">
                        <div className="flex-1 w-1 bg-red-500 rounded-b-xl"></div>
                        <div className="size-2 bg-red-500 rounded-full"></div>
                        <div className="flex-1 w-1 bg-red-500 rounded-t-xl"></div>
                    </div>
                    {/* Station signs */}
                    <div className="min-w-0 flex-1/2 flex">
                        <div className="flex items-center gap-1 justify-center">
                        </div>
                    </div>
                </div>

                <div className="row-start-18 row-end-19 col-start-89 col-end-90 flex justify-center">
                    <div className="h-full w-1 bg-red-500"></div>
                </div>

                <div className="row-start-19 row-end-20 col-start-89 col-end-90 flex gap-1 items-center justify-center">
                    {/* Station name */}
                    <div className="min-w-0 flex-1/2 flex justify-end">
                        <div className="w-full min-w-max text-center">Kobilja Glava</div>
                    </div>
                    {/* Marker */}
                    <div className="h-full flex flex-col items-center gap-0.5">
                        <div className="flex-1 w-1 bg-red-500 rounded-b-xl"></div>
                        <div className="size-2 bg-red-500 rounded-full"></div>
                        <div className="flex-1 w-1 bg-red-500 rounded-t-xl"></div>
                    </div>
                    {/* Station signs */}
                    <div className="min-w-0 flex-1/2 flex">
                        <div className="flex items-center gap-1 justify-center">
                        </div>
                    </div>
                </div>

                <div className="row-start-20 row-end-21 col-start-89 col-end-90 flex justify-center">
                    <div className="h-full w-1 bg-red-500"></div>
                </div>

                <div className="row-start-21 row-end-22 col-start-89 col-end-90 flex gap-1 items-center justify-center">
                    {/* Station name */}
                    <div className="min-w-0 flex-1/2 flex justify-end">
                        <div className="w-full min-w-max text-center">Šip</div>
                    </div>
                    {/* Marker */}
                    <div className="h-full flex flex-col items-center gap-0.5">
                        <div className="flex-1 w-1 bg-red-500 rounded-b-xl"></div>
                        <div className="size-2 bg-red-500 rounded-full"></div>
                        <div className="flex-1 w-1 bg-red-500 rounded-t-xl"></div>
                    </div>
                    {/* Station signs */}
                    <div className="min-w-0 flex-1/2 flex">
                        <div className="flex items-center gap-1 justify-center">
                        </div>
                    </div>
                </div>

                <div className="row-start-22 row-end-23 col-start-89 col-end-90 flex justify-center">
                    <div className="h-full w-1 bg-red-500"></div>
                </div>

                <div className="row-start-23 row-end-24 col-start-89 col-end-90 flex gap-1 items-center justify-center">
                    {/* Station name */}
                    <div className="min-w-0 flex-1/2 flex justify-end">
                        <div className="w-full min-w-max text-center">Bare</div>
                    </div>
                    {/* Marker */}
                    <div className="h-full flex flex-col items-center gap-0.5">
                        <div className="flex-1 w-1 bg-red-500 rounded-b-xl"></div>
                        <div className="size-2 bg-red-500 rounded-full"></div>
                        <div className="flex-1 w-1 bg-red-500 rounded-t-xl"></div>
                    </div>
                    {/* Station signs */}
                    <div className="min-w-0 flex-1/2 flex">
                        <div className="flex items-center gap-1 justify-center">
                        </div>
                    </div>
                </div>

                <div className="row-start-24 row-end-25 col-start-89 col-end-90 flex justify-center">
                    <div className="h-full w-1 bg-red-500"></div>
                </div>

                <div className="row-start-25 row-end-26 col-start-89 col-end-90 flex gap-1 items-center justify-center">
                    {/* Station name */}
                    <div className="min-w-0 flex-1/2 flex justify-end">
                        <div className="w-full min-w-max text-center">Koševo</div>
                    </div>
                    {/* Marker */}
                    <div className="h-full flex flex-col items-center gap-0.5">
                        <div className="flex-1 w-1 bg-red-500 rounded-b-xl"></div>
                        <div className="size-2 bg-red-500 rounded-full"></div>
                        <div className="flex-1 w-1 bg-red-500 rounded-t-xl"></div>
                    </div>
                    {/* Station signs */}
                    <div className="min-w-0 flex-1/2 flex">
                        <div className="flex items-center gap-1 justify-center">
                        </div>
                    </div>
                </div>

                <div className="row-start-26 row-end-27 col-start-89 col-end-90 flex justify-center">
                    <div className="h-full w-1 bg-red-500"></div>
                </div>

                <div className="row-start-27 row-end-28 col-start-89 col-end-90 flex gap-1 items-center justify-center">
                    {/* Station name */}
                    <div className="min-w-0 flex-1/2 flex justify-end">
                        <div className="w-full min-w-max text-center">Cigalne</div>
                    </div>
                    {/* Marker */}
                    <div className="h-full flex flex-col items-center gap-0.5">
                        <div className="flex-1 w-1 bg-red-500 rounded-b-xl"></div>
                        <div className="size-2 bg-red-500 rounded-full"></div>
                        <div className="flex-1 w-1 bg-red-500 rounded-t-xl"></div>
                    </div>
                    {/* Station signs */}
                    <div className="min-w-0 flex-1/2 flex">
                        <div className="flex items-center gap-1 justify-center">
                        </div>
                    </div>
                </div>
                {/* end */}

                {/* Trolleybus - right fork */}
                <div className="row-start-23 row-end-24 col-start-93 col-end-94 flex gap-1 items-center justify-center">
                    {/* Station signs */}
                    <div className="min-w-0 flex-1/2 flex justify-end">
                        <div className="flex items-center gap-1 justify-center">
                            <div className="shrink-0 w-10 text-center rounded bg-red-500 text-white text-lg font-bold">105</div>
                        </div>
                    </div>
                    {/* Marker */}
                    <div className="h-full flex flex-col items-center gap-0.5">
                        <div className="flex-1"></div>
                        <div className="size-2 bg-red-500 rounded-full"></div>
                        <div className="flex-1 w-1 bg-red-500 rounded-t-xl"></div>
                    </div>
                    {/* Station name */}
                    <div className="min-w-0 flex-1/2 flex">
                        <div className="w-full min-w-max text-center bg-red-500 text-white px-1 py-0.5 font-bold rounded-lg">Jezero</div>
                    </div>
                </div>

                <div className="row-start-24 row-end-25 col-start-93 col-end-94 flex justify-center">
                    <div className="h-full w-1 bg-red-500"></div>
                </div>

                <div className="row-start-25 row-end-26 col-start-93 col-end-94 flex gap-1 items-center justify-center">
                    {/* Station signs */}
                    <div className="min-w-0 flex-1/2 flex justify-end">
                        <div className="flex items-center gap-1 justify-center">
                        </div>
                    </div>
                    {/* Marker */}
                    <div className="h-full flex flex-col items-center gap-0.5">
                        <div className="flex-1 w-1 bg-red-500 rounded-b-xl"></div>
                        <div className="size-2 bg-red-500 rounded-full"></div>
                        <div className="flex-1 w-1 bg-red-500 rounded-t-xl"></div>
                    </div>
                    {/* Station name */}
                    <div className="min-w-0 flex-1/2 flex">
                        <div className="w-full min-w-max text-center">Koševo</div>
                    </div>
                </div>

                <div className="row-start-26 row-end-27 col-start-93 col-end-94 flex justify-center">
                    <div className="h-full w-1 bg-red-500"></div>
                </div>

                <div className="row-start-27 row-end-28 col-start-93 col-end-94 flex gap-1 items-center justify-center">
                    {/* Station signs */}
                    <div className="min-w-0 flex-1/2 flex justify-end">
                        <div className="flex items-center gap-1 justify-center">
                        </div>
                    </div>
                    {/* Marker */}
                    <div className="h-full flex flex-col items-center gap-0.5">
                        <div className="flex-1 w-1 bg-red-500 rounded-b-xl"></div>
                        <div className="size-2 bg-red-500 rounded-full"></div>
                        <div className="flex-1 w-1 bg-red-500 rounded-t-xl"></div>
                    </div>
                    {/* Station name */}
                    <div className="min-w-0 flex-1/2 flex">
                        <div className="w-full min-w-max text-center">Pijaca</div>
                    </div>
                </div>
                {/* end */}

                {/* Trolleybus - fork entrance */}
                <div className="row-start-28 row-end-29 col-start-89 col-end-90 flex">
                    <div className="grow"></div>
                    <div className="h-[calc(50%+0.125rem)] w-[calc(50%+0.125rem)] border-s-4 border-b-4 border-red-500 rounded-bl-xl"></div>
                </div>

                <div className="row-start-28 row-end-29 col-start-90 col-end-91 flex items-center">
                    <div className="w-full h-1 bg-red-500"></div>
                </div>

                <div className="row-start-28 row-end-29 col-start-91 col-end-92 flex flex-col">
                    <div className="grow"></div>
                    <div className="flex h-[calc(50%+0.125rem)]">
                        <div className="w-[calc(50%+0.125rem)] border-t-4 border-e-4 border-red-500 rounded-tr-xl"></div>
                        <div className="-ms-1 w-[calc(50%+0.125rem)] border-s-4 border-t-4 border-red-500 rounded-tl-xl"></div>
                    </div>
                </div>

                <div className="row-start-28 row-end-29 col-start-92 col-end-93 flex items-center">
                    <div className="w-full h-1 bg-red-500"></div>
                </div>

                <div className="row-start-28 row-end-29 col-start-93 col-end-94 flex">
                    <div className="h-[calc(50%+0.125rem)] w-[calc(50%+0.125rem)] border-b-4 border-e-4 border-red-500 rounded-br-xl"></div>
                </div>
                {/* end */}

            </div>
        </div>
    );
}