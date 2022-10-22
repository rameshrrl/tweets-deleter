import { makeRequest } from '../helpers/makeRequest.js';
import { generateOAuthHeader } from '../helpers/generateOAuthHeader.js';
import { generateHTTPOptions } from '../helpers/generateHTTPOptions.js';
import { TwitterV2BaseURL } from '../helpers/twitterBaseURL.js';

export const deleteSingleTweet = async (tweetID) => {

    const HTTPMethod = 'DELETE';
    const url = `${TwitterV2BaseURL}/tweets/${tweetID}`;

    const authorization = await generateOAuthHeader(HTTPMethod, url);

    const options = generateHTTPOptions(HTTPMethod, authorization);

    const deleted = await makeRequest(url, options);

    return deleted?.data?.deleted;

}