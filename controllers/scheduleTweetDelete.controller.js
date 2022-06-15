import { getUserTweets } from './getUserTweets.controller';
import { generateResponse } from '../helpers/response';
import { invokeDelete } from './invokeDelete.controller';
import { scheduleDelete } from '../jobs/scheduleDelete';

export const scheduleTweetDelete = async () => {

    try {

        scheduleDelete.start();

        const arrayOfTweets = await getUserTweets();

        const isDeleteAll = false;

        if(!arrayOfTweets.length) {
            return console.log('Nothing to Delete!')
        }

        console.log(`${arrayOfTweets.length} tweets found! Deleting process initiated...`);

        await invokeDelete(arrayOfTweets, isDeleteAll);

    } catch (error) {
        console.log(error);
    }

}