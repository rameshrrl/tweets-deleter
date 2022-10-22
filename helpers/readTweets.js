import { readFile } from 'fs/promises';
import { existsSync } from 'fs';

export const readTweets = async (path) => {

    if(!existsSync(path)) {
        return console.log(`${path} not found!`)
    }

    let tweetData = await readFile(path, 'utf-8');

    const index = tweetData.indexOf('[');
    tweetData = tweetData.slice(index);

    let tweetsArray = JSON.parse(tweetData);

    tweetsArray = tweetsArray.map((element) => {
        return {
            id: element.tweet.id,
            text: element.tweet.full_text
        }
    });

    return tweetsArray;
}