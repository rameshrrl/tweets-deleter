import { makeRequest } from '../helpers/makeRequest';
import { getUserId } from './getUserId.controller';

export const getUserTweets = async () => {

    let arrayOfTweetIDs = [];

    const userId = await getUserId();

    if(!userId) {return;}

    const url = `https://api.twitter.com/2/users/${userId}/tweets?max_results=100`;
    
    const options =  {
        method: 'GET',
        headers: {'Authorization': process.env.BEARER_TOKEN }
    }

    const response = await makeRequest(url, options);

    if(response?.data?.length) {
        response.data.forEach((tweet) => {
            arrayOfTweetIDs.push(tweet.id)
        });
    } else {
        console.log("Nothing to fetch!");
    }

    return arrayOfTweetIDs;

}