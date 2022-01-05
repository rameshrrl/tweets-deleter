import { makeRequest } from '../helpers/makeRequest';
import { getUserId } from './getUserId.controller';

export const getUserTweets = async () => {

    let arrayOfTweetIDs = [];

    const userId = await getUserId();

    if(!userId) {return;}

    const options =  {
        method: 'GET',
        headers: {'Authorization': process.env.BEARER_TOKEN }
    }

    const response = await makeRequest(`https://api.twitter.com/2/users/${userId}/tweets?max_results=100`, options);

    return arrayOfTweetIDs;

}