import { getUserTweets } from './getUserTweets.controller';
import { invokeDelete } from './invokeDelete.controller';
import { scheduleDelete } from '../jobs/scheduleDelete';

export const scheduleTweetDelete = async () => {

    try {

        scheduleDelete.start();

        const arrayOfTweets = await getUserTweets();

        if(!arrayOfTweets.length) {
            return console.log('Nothing to Delete!')
        }

        console.log(`${arrayOfTweets.length} tweets found! Deleting process initiated...`);

        await invokeDelete(arrayOfTweets);

    } catch (error) {
        console.log(error);
    }

}