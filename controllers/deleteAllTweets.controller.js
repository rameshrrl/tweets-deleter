import { invokeDelete } from './invokeDelete.controller.js';
import { generateResponse } from '../helpers/response.js';
import { readTweets } from '../helpers/readTweets.js';

export const deleteAllTweets = async (req, res) => {

    try {

        const tweetsArray = await readTweets(req.file.path);
    
        if(!tweetsArray.length) {
            console.log('Nothing to Delete!')
            return res.status(200).send(generateResponse('Nothing to Delete!', true))
        }
    
        res.status(200).send(generateResponse(`${tweetsArray.length} tweets found! Deleting process initiated...`, true));

        const isDeleteAll = true;
    
        await invokeDelete(tweetsArray, isDeleteAll);
    
    } catch (error) {

        console.log(error);
        res.status(500).send(generateResponse('Error in deleting tweets!'));

    }

}