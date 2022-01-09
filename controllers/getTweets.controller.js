import { makeRequest } from '../helpers/makeRequest';
import { generateOAuthHeader } from '../helpers/generateOAuthHeader';
import { generateHTTPOptions } from '../helpers/generateHTTPOptions';
import { generateURLWithRequestQuery } from '../helpers/generateRequestQuery';

export const getTweets = async (userId, reqParams) => {

    let arrayOfTweets = [];

    const HTTPMethod = 'GET';

    const baseURL = `https://api.twitter.com/2/users/${userId}/tweets`;

    let callAgain = false;

    console.log('Trying to fetch tweets....');

    do {

        if(arrayOfTweets.length) {
            console.log(`Fetched ${arrayOfTweets.length} tweets...`);
        }

        const authorization = await generateOAuthHeader(HTTPMethod, baseURL, reqParams);

        const options = generateHTTPOptions(HTTPMethod, authorization);
    
        let url = generateURLWithRequestQuery(baseURL, reqParams);
    
        const response = await makeRequest(url, options);

        if(response?.data?.length) {
            arrayOfTweets = [...arrayOfTweets,...response.data]
        }

        if(response?.meta?.next_token) {
            reqParams.pagination_token = response.meta.next_token;
            callAgain = true;
        } else {
            callAgain = false;
        }

    } while(callAgain)

    return arrayOfTweets;

}