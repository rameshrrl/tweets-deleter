import { makeRequest } from '../helpers/makeRequest';
import { generateOAuthHeader } from '../helpers/generateOAuthHeader';
import { generateHTTPOptions } from '../helpers/generateHTTPOptions';

export const getUserId = async () => {
    
    const username = process.env.TWITTER_USER_NAME;
    const HTTPMethod = 'GET';
    const url = `https://api.twitter.com/2/users/by/username/${username}`;

    const authorization = await generateOAuthHeader(HTTPMethod, url);

    const options = generateHTTPOptions(HTTPMethod, authorization);

    const response = await makeRequest(url, options);

    return response?.data?.id;
}