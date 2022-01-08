import { makeRequest } from '../helpers/makeRequest';
import { generateOAuthHeader } from '../helpers/generateOAuthHeader';
import { generateHTTPOptions } from '../helpers/generateHTTPOptions';
import { generateURLWithRequestQuery } from '../helpers/generateRequestQuery';

export const getTweets = async (userId, reqParams) => {

    let arrayOfTweets = [];

    const HTTPMethod = 'GET';

    let url = `https://api.twitter.com/2/users/${userId}/tweets`;

    let callAgain = false;

    do {

        const authorization = await generateOAuthHeader(HTTPMethod, url, reqParams);

        const options = generateHTTPOptions(HTTPMethod, authorization);
    
        url = generateURLWithRequestQuery(url, reqParams);
    
        const response = await makeRequest(url, options);

        if(response?.data?.length) {
            arrayOfTweets = [...response.data]
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