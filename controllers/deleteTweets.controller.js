import { makeRequest } from '../helpers/makeRequest';
import { getUserTweets } from './getUserTweets.controller';

export const deleteTweets = async() => {
    const response = await getUserTweets();

    const tweets = response?.data;
    const meta = response?.meta;

    const deleteAuthorization = `OAuth oauth_consumer_key="${process.env.API_KEY}",oauth_consumer_secret="${process.env.API_KEY_SECRET}",oauth_token="${process.env.ACCESS_TOKEN}",oauth_token_secret="${process.env.ACCESS_TOKEN_SECRET}"`

    const tweetID = "1477933137837506560"

    const options =  {
        method: 'DELETE',
        headers: {'Authorization': deleteAuthorization}
    }

    console.log(options);

    const deleted = await makeRequest(`https://api.twitter.com/2/tweets/${tweetID}`, options);


}