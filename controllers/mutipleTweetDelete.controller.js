import { getUserTweets } from './getUserTweets.controller';
import { deleteTweet } from './deleteTweet.controller';

export const deleteMultiplle = async () => {

    const arrayOfTweetIDs = await getUserTweets();

    let intervalId = setInterval(async () => {

        if (arrayOfTweetIDs.length > 0) {
            
            const deleted = await deleteTweet(arrayOfTweetIDs[0]);

            if(!deleted) throw new Error('Tweet Deletion Failed!');

            let deletedId = arrayOfTweetIDs.shift();

            console.log(`Deleted tweet with an ID of ${deletedId}`);
            
        } else {

            console.log('Tweets Deleted Successfully!');

            clearInterval(intervalId);
        }

    }, 19000);

}