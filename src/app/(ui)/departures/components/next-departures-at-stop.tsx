import { Departure } from '@/app/model/departures';
import { LineAndDirectionSign } from '@/app/(ui)/lines/components/line-and-direction-sign';
import { LineType } from '@/app/model/line-type';
import { MapPin, Signpost } from 'lucide-react';

export default function NextDeparturesAtStop({stop, line, direction, type, departures}: {
    stop: string,
    line: string,
    type: LineType,
    direction: string,
    departures: Departure[]
}) {
    return (
        <div className="flex flex-col gap-2 bg-white rounded-lg p-3">
            <div className="flex items-center justify-center text-xs font-bold">
                <MapPin size={14}/>{stop}
            </div>
            <div className="w-full border-t-1 border-foreground/30"></div>
            <div className="flex font-bold justify-center">
                <LineAndDirectionSign
                    name={line}
                    type={type}
                    direction={direction}
                />
            </div>
            <div className="w-full border-t-1 border-foreground/30"></div>
            {departures.length == 0 && (
                <div className="flex flex-col items-center text-foreground/50 py-3">
                    <Signpost size={32} strokeWidth={1}/>
                    <div className="text-xs text-center">No upcoming departure</div>
                </div>
            )}
            <div className="text-center">
                {departures.length > 0 && departures.map((departure: Departure, index: number) => (
                    <div key={`${stop}-${line}-${direction}-${index}`} className="">
                        {departure.displayTime}
                    </div>
                ))}
            </div>
        </div>
    );
}