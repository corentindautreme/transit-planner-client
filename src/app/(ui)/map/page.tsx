export default function Page() {
    return (
        <div className="h-full bg-white rounded-xl py-3 px-1 overflow-scroll">
            <div className="min-w-[400px] md:min-w-none h-full flex flex-col-reverse md:flex-row items-center justify-center">

                {/* Center track */}
                <div className="flex w-1 md:w-[100px] h-[100px] md:h-1 bg-yellow-500"></div>

                {/* Left/top fork */}
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
                        <div className="shrink-0 relative w-[25px] h-full md:w-full md:h-[25px] flex flex-col md:flex-row">
                            <div className="absolute right-0 bottom-0 h-full md:h-1 w-1 md:w-full bg-yellow-500"></div>
                            <div className="h-1/2 md:h-full md:w-1/2 -mb-1 me-0 md:mb-0 md:-me-1 border-yellow-500 border-4 border-s-0 border-t-0 rounded-br-3xl rounded-tl-none"></div> {/*md:border-s-4 md:border-t-4 md:border-b-0 md:border-l-0 md:rounded-tl-xl md:rounded-br-none*/}
                            <div className="grow border-yellow-500 border-4 border-s-0 border-b-0 rounded-tr-3xl rounded-bl-none md:border-s-4 md:border-b-4 md:border-t-0 md:border-r-0 md:rounded-bl-3xl md:rounded-tr-none"></div>
                        </div>
                    </div>


                    <div className="bg-background shrink-0 h-[50px] w-[calc(50%-0.125rem)] md:w-[50px] md:h-[calc(50%-0.125rem)] flex md:flex-col"></div>

                </div>

                {/* 2-track fork - connector to main track */}
                <TwoTrackForkConnector/>

                {/* 2-track fork */}
                <TwoTrackFork/>

                {/* Middle fork connector with station */}
                <MiddleForkConnectorWithStation/>

                {/* End fork connector */}
                <EndForkConnector/>
            </div>
        </div>
    );
}

function TwoTrackForkConnector() {
    return (
        <div className="w-full md:w-auto h-auto md:h-full flex md:flex-col">

            {/* Left/top branch */}
            <div className="flex-1/2 flex md:flex-col">
                <div className="grow"></div>
                {/* 50% + half of w-1 */}
                <div className="w-[calc(50%+0.125rem)] md:w-[50px] h-auto md:h-[calc(50%+0.125rem)] flex md:flex-col">
                    <div className="flex flex-col md:flex-row w-1/2 md:w-auto h-[50px] md:h-1/2">
                        <div className="hidden md:flex flex-1/2"></div>
                        <div className="w-auto md:w-1/2 h-[calc(50%+0.25rem)] md:h-auto border-4 border-yellow-500 border-t-0 border-e-0 md:border-t-4 md:border-b-0 rounded-bl-2xl md:rounded-b-none md:rounded-tl-2xl"></div>
                        <div className="flex md:hidden flex-1/2"></div>
                    </div>
                    {/* bring back to the right/bottom so that the borders "connect" */}
                    <div className="flex flex-col md:flex-row w-[calc(50%+0.125rem)] md:w-[50px] h-[50px] md:h-[calc(50%+0.125rem)] -me-1 md:me-0 md:-mb-1">
                        <div className="flex md:hidden flex-1/2"></div>
                        <div className="w-full md:w-[calc(50%+0.25rem)] h-[calc(50%+0.25rem)] md:h-auto border-4 border-yellow-500 border-s-0 border-b-0 md:border-b-4 md:border-t-0 rounded-tr-2xl md:rounded-t-none md:rounded-br-2xl"></div>
                    </div>
                </div>
            </div>

            {/* Right/bottom branch */}
            <div className="flex-1/2 flex md:flex-col">
                {/* 50% + half of w-1 */}
                <div className="w-[calc(50%+0.125rem)] md:w-[50px] h-auto md:h-[calc(50%+0.125rem)] flex md:flex-col">
                    {/* bring back to the left/top so that the borders "connect" */}
                    <div className="flex flex-col md:flex-row w-1/2 md:w-[50px] h-[50px] md:h-[calc(50%+0.125rem)] -ms-0.5 md:ms-0 md:-mt-0.5">
                        <div className="flex md:hidden flex-1/2"></div>
                        <div className="w-full md:w-[calc(50%+0.25rem)] h-[calc(50%+0.25rem)] md:h-auto border-4 border-yellow-500 border-b-0 border-e-0 md:border-e-4 md:border-s-0 rounded-tl-2xl md:rounded-tl-none md:rounded-tr-2xl"></div>
                    </div>
                    <div className="flex flex-col md:flex-row w-[calc(50%+0.125rem)] md:w-auto h-[50px] md:h-1/2">
                        <div className="hidden md:flex flex-1/2"></div>
                        <div className="w-auto md:w-1/2 h-[calc(50%+0.25rem)] md:h-auto border-4 border-yellow-500 border-t-0 border-s-0 md:border-s-4 md:border-e-0 rounded-br-2xl md:rounded-br-none md:rounded-bl-2xl"></div>
                        <div className="flex md:hidden flex-1/2"></div>
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
    );
}