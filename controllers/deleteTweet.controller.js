import { makeRequest } from '../helpers/makeRequest';
import { generateOAuthHeader } from '../helpers/generateOAuthHeader';

export const deleteTweet = async (tweetID) => {

    const HTTPMethod = 'DELETE';
    const url = `https://api.twitter.com/2/tweets/${tweetID}`;

    const Authorization = await generateOAuthHeader(HTTPMethod, url)

    const options =  {
        method: HTTPMethod,
        headers: {'Authorization': Authorization }
    }

    const deleted = await makeRequest(url, options);

    return deleted?.data?.deleted;

}