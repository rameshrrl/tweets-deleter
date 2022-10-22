import { generateNonce } from './generateNonce.js';
import { generateSignature } from './generateSignature.js';

export const generateOAuthHeader = async (HTTPMethod, url, reqParams = {}) => {

    const nonce = generateNonce();
    const timestamp = Math.round(Date.now() / 1000);
    const oAuthConsumer = process.env.API_KEY;
    const oAuthToken = process.env.ACCESS_TOKEN;
    const oAuthConsumerSecret = process.env.API_KEY_SECRET;
    const oAuthTokenSecret = process.env.ACCESS_TOKEN_SECRET;
    const oAuthSignatureMethod = 'HMAC-SHA1';
    const oAuthVersion = '1.0';

    const signature = await generateSignature({HTTPMethod, url, reqParams, nonce, timestamp, oAuthConsumer, oAuthToken, oAuthSignatureMethod, oAuthVersion, oAuthConsumerSecret, oAuthTokenSecret});

    return `OAuth oauth_consumer_key="${oAuthConsumer}",oauth_nonce="${nonce}",oauth_signature="${signature}",oauth_signature_method="${oAuthSignatureMethod}",oauth_timestamp="${timestamp}",oauth_token="${oAuthToken}",oauth_version="${oAuthVersion}"`;

}