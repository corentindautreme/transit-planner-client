import { LineType } from '@/app/model/line-type';

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

export type ConnectionsByLineType = { [key in LineType]: Connection[]};

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