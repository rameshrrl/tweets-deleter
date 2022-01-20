import { makeRequest } from '../helpers/makeRequest';
import { generateOAuthHeader } from '../helpers/generateOAuthHeader';
import { generateHTTPOptions } from '../helpers/generateHTTPOptions';
import { TwitterV2BaseURL } from '../helpers/twitterBaseURL';

export const deleteSingleTweet = async (tweetID) => {

    const HTTPMethod = 'DELETE';
    const url = `${TwitterV2BaseURL}/tweets/${tweetID}`;

    const authorization = await generateOAuthHeader(HTTPMethod, url);

    const options = generateHTTPOptions(HTTPMethod, authorization);

    const deleted = await makeRequest(url, options);

    return deleted?.data?.deleted;

}