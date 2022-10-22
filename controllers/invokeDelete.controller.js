import { deleteSingleTweet } from './deleteTweet.controller.js';
import { logDeleted } from '../helpers/logDeleted.js';

export const invokeDelete = async (arrayOfTweets, isDeleteAll) => {

    let intervalId = setInterval(async () => {
    
        if (arrayOfTweets.length > 0) {
            
            const deleted = await deleteSingleTweet(arrayOfTweets[arrayOfTweets.length - 1].id);

            if(!deleted) throw new Error('Tweet Deletion Failed!');

            let deletedTweet = arrayOfTweets.pop();

            console.log(`Deleted : ${deletedTweet.text}`);
            if(isDeleteAll) {
                logDeleted(deletedTweet.id);
            }
            console.log(`---------------------------------------------------------------------------------------`);
            
        } else {

            console.log('Tweets Deleted Successfully!');

            clearInterval(intervalId);
            
        }

    }, 19000);

}