import { makeRequest } from '../helpers/makeRequest.js';
import { generateOAuthHeader } from '../helpers/generateOAuthHeader.js';
import { generateHTTPOptions } from '../helpers/generateHTTPOptions.js';
import { generateURLWithRequestQuery } from '../helpers/generateRequestQuery.js';
import { TwitterV2BaseURL } from '../helpers/twitterBaseURL.js';

export const getTweets = async (userId, reqParams) => {

    let arrayOfTweets = [];

    const HTTPMethod = 'GET';

    const baseURL = `${TwitterV2BaseURL}/users/${userId}/tweets`;

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