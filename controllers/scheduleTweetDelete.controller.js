import { getUserTweets } from './getUserTweets.controller';
import { deleteSingleTweet } from './deleteTweet.controller';
import { generateResponse } from '../helpers/response';

export const scheduleDelete = async (req, res) => {

    try {

        const arrayOfTweets = await getUserTweets();

        if(!arrayOfTweets.length) {
            console.log('Nothing to Delete!')
            return res.status(200).send(generateResponse('Nothing to Delete!', true))
        }

        res.status(200).send(generateResponse(`${arrayOfTweets.length} tweets found! Deleting process initiated...`, true));

        console.log(`${arrayOfTweets.length} tweets found! Deleting process initiated...`);
    
        let intervalId = setInterval(async () => {
    
            if (arrayOfTweets.length > 0) {
                
                const deleted = await deleteSingleTweet(arrayOfTweets[0].id);
    
                if(!deleted) throw new Error('Tweet Deletion Failed!');
    
                let deletedTweet = arrayOfTweets.shift();
    
                console.log(`Deleted ${deletedTweet.text}`);
                console.log(`---------------------------------------------------------------------------------------`);
                
            } else {
    
                console.log('Tweets Deleted Successfully!');
    
                clearInterval(intervalId);
            }
    
        }, 19000);

    } catch (error) {
        console.log(error);
        res.status(500).send(generateResponse('Error in configuring schedule delete!'));
    }

}