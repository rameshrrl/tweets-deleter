import { makeRequest } from '../helpers/makeRequest';
import { getUserId } from './getUserId.controller';
import { generateOAuthHeader } from '../helpers/generateOAuthHeader';

export const getUserTweets = async () => {

    try {
        const userId = await getUserId();
    
        if(!userId) throw new Error('User not found!');
    
        const HTTPMethod = 'GET';
        const url = `https://api.twitter.com/2/users/${userId}/tweets`;
    
        const reqParams = {
            max_results: 100
        }
    
        const Authorization = await generateOAuthHeader(HTTPMethod, url, reqParams)

        const options =  {
            method: 'GET',
            headers: {'Authorization': Authorization }
        }
    
        const response = await makeRequest(`${url}?max_results=100`, options);
    
        if(response?.data?.length) {
            return response?.data;
        } else {
            console.log("Nothing to fetch!");
        }
    
    } catch (error) {
        console.log(error);
    }

}