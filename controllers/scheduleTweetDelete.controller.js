import { getUserTweets } from './getUserTweets.controller';
import { generateResponse } from '../helpers/response';
import { invokeDelete } from './invokeDelete.controller';
import { scheduleDelete } from '../jobs/scheduleDelete';

export const scheduleTweetDelete = async (req, res) => {

    try {

        scheduleDelete.start();

        const arrayOfTweets = await getUserTweets();

        const isDeleteAll = false;

        if(!arrayOfTweets.length) {
            console.log('Nothing to Delete!')
            return res.status(200).send(generateResponse('Nothing to Delete!', true))
        }

        res.status(200).send(generateResponse(`${arrayOfTweets.length} tweets found! Deleting process initiated...`, true));

        console.log(`${arrayOfTweets.length} tweets found! Deleting process initiated...`);

        await invokeDelete(arrayOfTweets, isDeleteAll);

    } catch (error) {
        console.log(error);
        res.status(500).send(generateResponse('Error in configuring schedule delete!'));
    }

}