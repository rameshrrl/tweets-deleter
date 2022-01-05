import { getUserTweets } from './getUserTweets.controller';
import { deleteTweet } from './deleteTweet.controller';

export const deleteMultiplle = async () => {
    const arrayOfTweetIDs = await getUserTweets();

    const deleted  = await deleteTweet('');
}