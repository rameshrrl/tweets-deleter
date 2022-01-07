import { getUserTweets } from './getUserTweets.controller';
import { deleteTweet } from './deleteTweet.controller';

export const deleteMultiplle = async () => {

    try {

        const arrayOfTweets = await getUserTweets();

        if(!arrayOfTweets.length) {
            return console.log('Nothing to Delete!');
        }
    
        let intervalId = setInterval(async () => {
    
            if (arrayOfTweets.length > 0) {
                
                const deleted = await deleteTweet(arrayOfTweets[0].id);
    
                if(!deleted) throw new Error('Tweet Deletion Failed!');
    
                let deletedTweet = arrayOfTweets.shift();
    
                console.log(`Deleted ${deletedTweet.text}`);
                console.log(`-----------------------------`);
                
            } else {
    
                console.log('Tweets Deleted Successfully!');
    
                clearInterval(intervalId);
            }
    
        }, 19000);

    } catch (error) {
        console.log(error);
    }

}