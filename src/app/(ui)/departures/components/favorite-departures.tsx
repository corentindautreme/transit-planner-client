import NextDeparturesAtStop from '@/app/(ui)/departures/components/next-departures-at-stop';
import { FavoriteStop } from '@/app/model/stop';

export default function FavoriteDepartures({stops}: { stops: FavoriteStop[] }) {
    return (
        <div className="grid grid-cols-2 grid-flow-row gap-3">
            {stops.map(departure => <NextDeparturesAtStop
                key={`${departure.stop}-${departure.direction}`}
                stop={departure.stop}
                line={departure.line}
                type={departure.type}
                direction={departure.direction}
            />)}
        </div>
    );
}