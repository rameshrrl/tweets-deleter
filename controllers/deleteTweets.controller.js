import { makeRequest } from '../helpers/makeRequest';
import { getUserTweets } from './getUserTweets.controller';
import { generateNonce } from '../helpers/generateNonce';
import { generateSignature } from '../helpers/generateSignature';

export const deleteTweets = async() => {
    const response = await getUserTweets();

    const tweets = response?.data;
    const meta = response?.meta;

    const HTTPMethod = 'DELETE';
    let tweetID = '';
    const url = `https://api.twitter.com/2/tweets/${tweetID}`;
    const nonce = generateNonce();
    const timestamp = new Date().getTime();
    const oAuthConsumerKey = process.env.API_KEY;
    const oAuthToken = process.env.ACCESS_TOKEN;
    const oAuthSignatureMethod = 'HMAC-SHA1';
    const oAuthVersion = '1.0';

    const signature = await generateSignature({HTTPMethod, url, nonce, timestamp, oAuthConsumerKey, oAuthToken, oAuthSignatureMethod, oAuthVersion});
    
    const Authorization = `OAuth oauth_consumer_key="${oAuthConsumerKey}",oauth_nonce="${nonce}",oauth_signature="${signature}",oauth_signature_method="${oAuthSignatureMethod}",oauth_timestamp="${timestamp}",oauth_token="${oAuthToken}",oauth_version="${oAuthVersion}"`;

    const options =  {
        method: HTTPMethod,
        headers: {'Authorization': Authorization }
    }

    const deleted = await makeRequest(url, options);

}