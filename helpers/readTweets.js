import { readFile } from 'fs/promises';
import { existsSync } from 'fs';

export const readTweets = async (path) => {

    if(!existsSync(path)) {
        return console.log(`${path} not found!`)
    }

    const TweetData = await readFile(path, 'utf-8');

    let tweetsArray = JSON.parse(TweetData);

    tweetsArray = tweetsArray.map((element) => {
        return {
            id: element.tweet.id,
            text: element.tweet.full_text
        }
    });

    return tweetsArray;
}