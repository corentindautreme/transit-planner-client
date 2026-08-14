export default function Page() {
    return (
        <div className="h-full bg-white rounded-xl py-3 px-1 flex flex-col-reverse md:flex-row items-center justify-center overflow-scroll">

            {/* Center track */}
            <div className="flex w-1 md:w-[100px] h-[100px] md:h-1 bg-yellow-500"></div>

            {/* 2-track fork*/}
            <div className="w-full md:w-auto h-auto md:h-full flex md:flex-col">

                {/* Top/left branch */}
                <div className="flex-1/2 flex flex-col-reverse md:flex-row items-center justify-center">
                    <div className="flex-1/2 w-1 md:w-[100px] h-[100px] md:h-1 bg-yellow-500"></div>

                    {/* Station - left/top label */}
                    <div className="flex gap-2 md:flex-col w-full md:max-w-[50px] max-h-[50px] md:max-h-none md:h-full">
                        {/* Station label */}
                        <div className="flex-1/2 flex md:flex-col items-center justify-end">
                            <div className="text-end md:text-center">Zeljeznicka Stanica</div>
                        </div>
                        {/* Station marker */}
                        <div className="flex flex-col md:flex-row items-center gap-0.5">
                            <div className="flex-1 w-1 h-0 md:w-0 md:h-1 bg-yellow-500 rounded-b-xl md:rounded-b-none md:rounded-br-xl md:rounded-e-xl"></div>
                            <div className="size-2 bg-yellow-500 rounded-full"></div>
                            <div className="flex-1 w-1 md:h-1 bg-yellow-500 rounded-t-xl md:rounded-t-none md:rounded-tl-xl md:rounded-s-xl"></div>
                        </div>
                        {/* Station signs */}
                        <div className="flex-1/2 flex items-center md:items-start justify-end md:justify-center">
                            <div className="flex items-center flex-wrap gap-1 justify-start md:justify-center">
                                <div className="shrink-0 w-5 text-center rounded bg-yellow-500 text-lg font-bold">1</div>
                                <div className="shrink-0 w-5 text-center rounded bg-yellow-500 text-lg font-bold">2</div>
                                <div className="shrink-0 w-5 text-center rounded bg-yellow-500 text-lg font-bold">3</div>
                                <div className="shrink-0 w-5 text-center rounded bg-yellow-500 text-lg font-bold">4</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1/2 w-1 md:w-auto h-auto md:h-1 bg-yellow-500"></div>
                </div>

                {/* Bottom/right branch */}
                <div className="flex-1/2 flex flex-col-reverse md:flex-row items-center justify-center">
                    <div className="flex-1/2 w-1 md:w-auto h-auto md:h-1 bg-yellow-500"></div>

                    {/* Station - right/bottom label */}
                    <div className="flex gap-2 md:flex-col w-full md:max-w-[50px] max-h-[50px] md:max-h-none md:h-full">
                        {/* Station signs */}
                        <div className="flex-1/2 flex items-center md:items-end justify-end md:justify-center">
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
                        <div className="flex-1/2 flex md:flex-col items-center justify-start">
                            <div className="md:text-center">Banka</div>
                        </div>
                    </div>

                    <div className="flex-1/2 w-1 md:w-auto h-auto md:h-1 bg-yellow-500"></div>
                </div>

            </div>

            {/* Middle fork connector with station */}
            <div className="relative w-full md:w-[50px] h-[50px] md:h-full flex md:flex-col">
                <div className="flex-1/4"></div>

                {/*<div className="relative flex-1/2 flex md:flex-col">*/}
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

            {/* End fork connector */}
            <div className="w-full md:w-[25px] h-[25px] md:h-full flex md:flex-col">
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

        </div>
    );
}