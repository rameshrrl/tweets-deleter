import { readFile } from 'fs/promises';
import { invokeDelete } from './invokeDelete.controller';
import { generateResponse } from '../helpers/response';

export const deleteAll = async (req, res) => {

    try {
        
        const TweetData = await readFile(req.file.path, 'utf-8');

        let tweetsArray = JSON.parse(TweetData);

        tweetsArray = tweetsArray.map((element) => {
            return {
                id: element.tweet.id,
                text: element.tweet.full_text
            }
        });
    
        if(!tweetsArray.length) {
            console.log('Nothing to Delete!')
            return res.status(200).send(generateResponse('Nothing to Delete!', true))
        }
    
        res.status(200).send(generateResponse(`${tweetsArray.length} tweets found! Deleting process initiated...`, true));

        const isDeleteAll = true;
    
        const deleted = await invokeDelete(tweetsArray, isDeleteAll);
    
        if(deleted) console.log('Tweets Deleted Successfully!');

    } catch (error) {

        console.log(error);
        res.status(500).send(generateResponse('Error in deleting tweets!'));

    }

}