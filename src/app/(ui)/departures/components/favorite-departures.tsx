import NextDeparturesAtStop from '@/app/(ui)/departures/components/next-departures-at-stop';
import { FavoriteStop } from '@/app/model/stop';

export default function FavoriteDepartures({stops}: { stops: FavoriteStop[] }) {
    return (
        <div className="grid grid-cols-2 grid-flow-row gap-3">
            {stops.map(stop => <NextDeparturesAtStop
                key={`${stop.name}-${stop.direction}`}
                stopId={stop.id}
                stopName={stop.name}
                line={stop.line}
                type={stop.type}
                direction={stop.direction}
            />)}
        </div>
    );
}