import { makeRequest } from '../helpers/makeRequest.js';
import { generateOAuthHeader } from '../helpers/generateOAuthHeader.js';
import { generateHTTPOptions } from '../helpers/generateHTTPOptions.js';
import { TwitterV2BaseURL } from '../helpers/twitterBaseURL.js';

export const getUserId = async () => {
    
    const username = process.env.TWITTER_USER_NAME;
    const HTTPMethod = 'GET';
    const url = `${TwitterV2BaseURL}/users/by/username/${username}`;

    const authorization = await generateOAuthHeader(HTTPMethod, url);

    const options = generateHTTPOptions(HTTPMethod, authorization);

    const response = await makeRequest(url, options);

    return response?.data?.id;
}