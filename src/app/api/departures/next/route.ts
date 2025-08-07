import { NextRequest } from 'next/server';
import { fetch } from '@/app/(ui)/utils/fetch';

export const GET = async (request: NextRequest) => {
    const searchParams = request.nextUrl.searchParams;
    const from = searchParams.get('from');
    const line = searchParams.get('line');
    const direction = searchParams.get('direction');
    const limit = searchParams.get('limit');
    let queryString = `?from=${from}`;
    if (line) {
        queryString += `&line=${line}`;
    }
    if (direction) {
        queryString += `&direction=${direction}`;
    }
    if (limit) {
        queryString += `&limit=${limit}`;
    }
    const response = await fetch(`${process.env.BACKEND_URL}/departures/next${queryString}`);
    const data = await response.json();
    return new Response(JSON.stringify(data), {status: response.status});
}