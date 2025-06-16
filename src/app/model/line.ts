import { LineType } from '@/app/model/line-type';

export interface Line {
    id?: number;
    name: string;
    type: LineType;
    directions: string[];
}