import { getUserTweets } from './getUserTweets.controller';
import { generateResponse } from '../helpers/response';
import { invokeDelete } from './invokeDelete.controller';

export const scheduleDelete = async (req, res) => {

    try {

        const arrayOfTweets = await getUserTweets();

        if(!arrayOfTweets.length) {
            console.log('Nothing to Delete!')
            return res.status(200).send(generateResponse('Nothing to Delete!', true))
        }

        res.status(200).send(generateResponse(`${arrayOfTweets.length} tweets found! Deleting process initiated...`, true));

        console.log(`${arrayOfTweets.length} tweets found! Deleting process initiated...`);

        const deleted = await invokeDelete(arrayOfTweets);

        if(deleted) console.log('Tweets Deleted Successfully!');    

    } catch (error) {
        console.log(error);
        res.status(500).send(generateResponse('Error in configuring schedule delete!'));
    }

}