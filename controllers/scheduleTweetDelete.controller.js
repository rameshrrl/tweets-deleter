import { getUserTweets } from './getUserTweets.controller';
import { invokeDelete } from './invokeDelete.controller';

export const scheduleTweetDelete = async () => {

    try {

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