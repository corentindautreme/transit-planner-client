import { LineType } from "./line-type";

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

export type DepartureByLine = { [line: string]: { type: LineType, departures: { [direction: string]: Departure[] } } };

export interface DepartureForStopAndLine {
    stop: string;
    line: string;
    direction: string;
    type: LineType;
    departures: Departure[];
}