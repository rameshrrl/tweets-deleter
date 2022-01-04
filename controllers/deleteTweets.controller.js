import { makeRequest } from '../helpers/makeRequest';
import { getUserTweets } from './getUserTweets.controller';
import { generateNonce } from '../helpers/generateNonce';

export const deleteTweets = async() => {
    const response = await getUserTweets();

    const tweets = response?.data;
    const meta = response?.meta;

    const nonce = generateNonce();
    const timestamp = new Date().getTime();
    
    const Authorization = `OAuth oauth_consumer_key="${process.env.API_KEY}",oauth_nonce="${nonce}",oauth_signature="Sa6XalKvgmcRb4KDOme9edSlVnk%3D",oauth_signature_method="HMAC-SHA1",oauth_timestamp="${timestamp}",oauth_token="${process.env.ACCESS_TOKEN}",oauth_version="1.0"`;

    const tweetID = '122112111';

    const options =  {
        method: 'DELETE',
        headers: {'Authorization': Authorization }
    }

    const deleted = await makeRequest(`https://api.twitter.com/2/tweets/${tweetID}`, options);

}