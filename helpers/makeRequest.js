import fetch from 'node-fetch';

export const makeRequest = async (url, options) => {

    const params = {}
    params.method = options.method;
    params.headers = options.headers;

    if(options.method === 'POST' || options.method === 'PUT') params.body = options.body;

    const response = await fetch(url, params);
    return response.json();
}