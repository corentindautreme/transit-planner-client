import { LineType } from '@/app/model/line-type';
import { Departure } from '@/app/model/departures';

export interface Stop {
    id: number;
    name: string;
    connections: Connection[];
}

export interface GroupedConnectionsStop {
    id: number;
    name: string;
    connections: ConnectionsByLineType;
}

export type ConnectionsByLineType = { [key in LineType]: Connection[] };

export interface Connection {
    line: string;
    type: LineType;
    directions: string[];
}

export interface FavoriteStop {
    id: number;
    name: string;
    line: string;
    type: LineType;
    direction: string;
}

export interface StopAndRouteDeparture extends Omit<Stop, 'connections'> {
    departures: (Departure & { previous: boolean })[];
}