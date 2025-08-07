import { getToken } from '../../../../auth.config';

const fetcher = async (input: string | URL | globalThis.Request, init?: RequestInit) => {
    const token = await getToken();
    const opts = init
        ? {...init, headers: {...init.headers, 'Authorization': `Bearer ${token}`}}
        : {headers: {'Authorization': `Bearer ${token}`}};
    return fetch(input, opts);
}

export { fetcher as fetch };