import { getUserTweets } from './getUserTweets.controller';
import { deleteTweet } from './deleteTweet.controller';

export const deleteMultiple = async () => {

    try {

        const arrayOfTweets = await getUserTweets();

        if(!arrayOfTweets.length) {
            return console.log('Nothing to Delete!');
        }

        const timer = arrayOfTweets.length < 50 ? 2000 : 19000;

        console.log(`${arrayOfTweets.length} tweets found! Deleting process initiated...`);
    
        let intervalId = setInterval(async () => {
    
            if (arrayOfTweets.length > 0) {
                
                const deleted = await deleteTweet(arrayOfTweets[0].id);
    
                if(!deleted) throw new Error('Tweet Deletion Failed!');
    
                let deletedTweet = arrayOfTweets.shift();
    
                console.log(`Deleted ${deletedTweet.text}`);
                console.log(`---------------------------------------------------------------------------------------`);
                
            } else {
    
                console.log('Tweets Deleted Successfully!');
    
                clearInterval(intervalId);
            }
    
        }, timer);

    } catch (error) {
        console.log(error);
    }

}