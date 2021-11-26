import fetch from 'node-fetch';
const token = process.env.BEARER_TOKEN;


export const makeRequest = async (url, options) => {

    const response = await fetch(url, {
        method: options.method,
        headers: {'Authorization': token }
    });

    return await response.json();
}