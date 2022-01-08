import { getUserId } from './getUserId.controller';
import { givenDaysAgo } from '../helpers/givenDaysAgo';
import { getTweets } from './getTweets.controller';

export const getUserTweets = async () => {

    try {
        const userId = await getUserId();
    
        if(!userId) throw new Error('User not found!');
    
        const deleteBefore = parseInt(process.env.DELETE_BEFORE) || 7;
        const day = givenDaysAgo(deleteBefore);
    
        const reqParams = {
            max_results: 5,
            end_time: day
        }

        const response = await getTweets(userId, reqParams);
    
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