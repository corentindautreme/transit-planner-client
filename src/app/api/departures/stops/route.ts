import { NextRequest } from 'next/server';
import { fetch } from '@/app/(ui)/utils/fetch';

export const GET = async (request: NextRequest) => {
    const searchParams = request.nextUrl.searchParams;
    const from = searchParams.get('from');
    const line = searchParams.get('line');
    const direction = searchParams.get('direction');
    const after = searchParams.get('after');
    const includePast = searchParams.get('includePast');
    let queryString = `?from=${from}`;
    if (line) {
        queryString += `&line=${line}`;
    }
    if (direction) {
        queryString += `&direction=${direction}`;
    }
    if (after) {
        console.log(after);
        queryString += `&after=${encodeURIComponent(after)}`;
    }
    if (includePast) {
        queryString += `&includePast=${includePast}`;
    }
    const response = await fetch(`${process.env.BACKEND_URL}/departures/stops${queryString}`);
    const data = await response.json();
    return new Response(JSON.stringify(data), {status: response.status});
}