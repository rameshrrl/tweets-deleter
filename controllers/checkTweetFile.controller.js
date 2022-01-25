import { ReadLogs } from '../helpers/readLogs';
import { readTweets } from '../helpers/readTweets';
import { invokeDelete } from './invokeDelete.controller';

export const checkTweets = async () => {

    let tweetsArray = await readTweets('./uploads/tweet.js');

    if(!tweetsArray?.length) return console.log('Nothing to delete!')

    const logs = await ReadLogs();

    if(!logs?.length) return console.log('No logs found!');

    const parsedArray = tweetsArray.map(tweet => tweet.id);

    const indexNeedToBeSliced = parsedArray.indexOf(logs[logs.length - 1]);

    tweetsArray = tweetsArray.splice(indexNeedToBeSliced + 1);

    console.log(`${tweetsArray.length} tweets found! Deleting process initiated...`);

    const isDeleteAll = true;
    
    await invokeDelete(tweetsArray, isDeleteAll);

}