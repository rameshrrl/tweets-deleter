import { getUserId } from './getUserId.controller.js';
import { givenDaysAgo } from '../helpers/givenDaysAgo.js';
import { getTweets } from './getTweets.controller.js';

export const getUserTweets = async () => {

    try {
        const userId = await getUserId();
    
        if(!userId) throw new Error('User not found!');
    
        const deleteBefore = parseInt(process.env.DELETE_BEFORE) || 7;
        const end_time = givenDaysAgo(deleteBefore);
        const max_results = 100;
    
        const reqParams = {
            max_results,
            end_time
        }

        const arrayOfTweets = await getTweets(userId, reqParams);

        return arrayOfTweets;
    
    } catch (error) {
        console.log(error);
    }

}