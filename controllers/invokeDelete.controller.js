import { deleteSingleTweet } from './deleteTweet.controller';

export const invokeDelete = async (arrayOfTweets) => {

    const timer = arrayOfTweets.length < 50 ? 2000 : 19000;

    let intervalId = setInterval(async () => {
    
        if (arrayOfTweets.length > 0) {
            
            const deleted = await deleteSingleTweet(arrayOfTweets[arrayOfTweets.length - 1].id);

            if(!deleted) throw new Error('Tweet Deletion Failed!');

            let deletedTweet = arrayOfTweets.pop();

            console.log(`Deleted :: ${deletedTweet.text}`);

            console.log(`---------------------------------------------------------------------------------------`);
            
        } else {

            console.log('Tweets Deleted Successfully!');

            clearInterval(intervalId);
            
        }

    }, timer);

}