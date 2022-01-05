import { makeRequest } from '../helpers/makeRequest';
import { getUserTweets } from './getUserTweets.controller';
import { generateOAuthHeader } from '../helpers/generateOAuthHeader';

export const deleteTweets = async() => {
    const arrayOfTweetIDs = await getUserTweets();

    const HTTPMethod = 'DELETE';
    let tweetID = '';
    const url = `https://api.twitter.com/2/tweets/${tweetID}`;

    const Authorization = await generateOAuthHeader(HTTPMethod, url)

    const options =  {
        method: HTTPMethod,
        headers: {'Authorization': Authorization }
    }

    const deleted = await makeRequest(url, options);

}