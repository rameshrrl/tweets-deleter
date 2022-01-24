import { deleteSingleTweet } from './deleteTweet.controller';
import { logDeleted } from '../helpers/logDeleted';

export const invokeDelete = async (arrayOfTweets, isDeleteAll) => {

    let intervalId = setInterval(async () => {
    
        if (arrayOfTweets.length > 0) {
            
            const deleted = await deleteSingleTweet(arrayOfTweets[0].id);

            if(!deleted) throw new Error('Tweet Deletion Failed!');

            let deletedTweet = arrayOfTweets.shift();

            console.log(`Deleted ${deletedTweet.text}`);
            if(isDeleteAll) {
                logDeleted(deleted.id);
            }
            console.log(`---------------------------------------------------------------------------------------`);
            
        } else {

            clearInterval(intervalId);
            
            return true;

        }

    }, 19000);

}