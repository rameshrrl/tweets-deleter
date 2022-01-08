import { makeRequest } from '../helpers/makeRequest';
import { getUserId } from './getUserId.controller';
import { generateOAuthHeader } from '../helpers/generateOAuthHeader';
import { generateHTTPOptions } from '../helpers/generateHTTPOptions';

export const getUserTweets = async () => {

    try {
        const userId = await getUserId();
    
        if(!userId) throw new Error('User not found!');
    
        const HTTPMethod = 'GET';
        const url = `https://api.twitter.com/2/users/${userId}/tweets`;
    
        const reqParams = {
            max_results: 100
        }
    
        const authorization = await generateOAuthHeader(HTTPMethod, url, reqParams);

        const options = generateHTTPOptions(HTTPMethod, authorization);
    
        const response = await makeRequest(`${url}?max_results=100`, options);
    
        if(response?.data?.length) {
            return response?.data;
        } else {
            console.log("Nothing to fetch!");
            return [];
        }
    
    } catch (error) {
        console.log(error);
    }

}