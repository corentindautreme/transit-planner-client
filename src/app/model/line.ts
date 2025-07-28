import { LineType } from '@/app/model/line-type';
import { Stop } from '@/app/model/stop';

export interface Line {
    id?: number;
    name: string;
    type: LineType;
    directions: string[];
}

export interface Route {
    direction: string;
    stops: Stop[];
}

export interface DescribedLine extends Line {
    routes: Route[];
}