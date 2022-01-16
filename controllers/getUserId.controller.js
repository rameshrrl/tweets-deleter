import { makeRequest } from '../helpers/makeRequest';
import { generateOAuthHeader } from '../helpers/generateOAuthHeader';
import { generateHTTPOptions } from '../helpers/generateHTTPOptions';
import { TwitterV2BaseURL } from '../helpers/twitterBaseURL';

export const getUserId = async () => {
    
    const username = process.env.TWITTER_USER_NAME;
    const HTTPMethod = 'GET';
    const url = `${TwitterV2BaseURL}/users/by/username/${username}`;

    const authorization = await generateOAuthHeader(HTTPMethod, url);

    const options = generateHTTPOptions(HTTPMethod, authorization);

    const response = await makeRequest(url, options);

    return response?.data?.id;
}