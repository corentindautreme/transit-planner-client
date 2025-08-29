import { LineType } from "./line-type";
import { Stop } from '@/app/model/stop';

export interface Departure {
    scheduledAt: string;
    displayTime?: string;
}

export interface DepartureDetails {
    line: string;
    direction: string;
    type: LineType;
    time: string;
    displayTime: string;
}

export interface DeparturesAtStop {
    stop: Stop;
    departures: DeparturesByLine;
}

export type DeparturesByLine = { [line: string]: { type: LineType, departures: { [direction: string]: Departure[] } } };

export interface FavoriteSchedule {
    stopId: number;
    stopName: string;
    line: string;
    type: LineType;
}

export interface DepartureAtStop extends Departure {
    line: string;
    type: LineType;
    direction: string;
}