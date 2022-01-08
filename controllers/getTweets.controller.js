import { makeRequest } from '../helpers/makeRequest';
import { generateOAuthHeader } from '../helpers/generateOAuthHeader';
import { generateHTTPOptions } from '../helpers/generateHTTPOptions';
import { generateURLWithRequestQuery } from '../helpers/generateRequestQuery';

export const getTweets = async (userId, reqParams) => {

    const HTTPMethod = 'GET';

    let url = `https://api.twitter.com/2/users/${userId}/tweets`;

    const authorization = await generateOAuthHeader(HTTPMethod, url, reqParams);

    const options = generateHTTPOptions(HTTPMethod, authorization);

    url = generateURLWithRequestQuery(url, reqParams);

    const response = await makeRequest(url, options);

    return response;

}