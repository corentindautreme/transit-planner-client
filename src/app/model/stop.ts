import { LineType } from '@/app/model/line-type';

export interface Stop {
    name: string;
    connections: Connection[];
}

export interface GroupedConnectionsStop {
    name: string;
    connections: ConnectionsByLineType;
}

export type ConnectionsByLineType = { [key in LineType]: Connection[]};

export interface Connection {
    line: string;
    type: LineType;
    directions: string[];
}

export interface FavoriteStop {
    stop: string;
    line: string;
    type: LineType;
    direction: string;
}