import { makeRequest } from '../helpers/makeRequest';
import { generateOAuthHeader } from '../helpers/generateOAuthHeader';
import { generateHTTPOptions } from '../helpers/generateHTTPOptions';

export const deleteTweet = async (tweetID) => {

    const HTTPMethod = 'DELETE';
    const url = `https://api.twitter.com/2/tweets/${tweetID}`;

    const authorization = await generateOAuthHeader(HTTPMethod, url);

    const options = generateHTTPOptions(HTTPMethod, authorization);

    const deleted = await makeRequest(url, options);

    return deleted?.data?.deleted;

}