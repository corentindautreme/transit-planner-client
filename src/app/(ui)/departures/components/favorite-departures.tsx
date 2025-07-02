import { DepartureForStopAndLine } from '@/app/model/departures';
import NextDeparturesAtStop from '@/app/(ui)/departures/components/next-departures-at-stop';

export default function FavoriteDepartures({departures}: { departures: DepartureForStopAndLine[] }) {
    return (
        <div className="grid grid-cols-2 grid-flow-row gap-3">
            {departures.map((departure: DepartureForStopAndLine) => <NextDeparturesAtStop
                key={`${departure.stop}-${departure.direction}`}
                stop={departure.stop}
                line={departure.line}
                type={departure.type}
                direction={departure.direction}
                departures={departure.departures}
            />)}
        </div>
    );
}