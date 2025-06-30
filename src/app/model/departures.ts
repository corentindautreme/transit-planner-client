import { LineType } from "./line-type";

export interface Departure {
    scheduledAt: string;
}

export interface DepartureDetails {
    line: string;
    direction: string;
    type: LineType;
    time: string;
    displayTime: string;
}

export type DepartureByLine = { [line: string]: { type: LineType, departures: { [direction: string]: Departure[] } } };