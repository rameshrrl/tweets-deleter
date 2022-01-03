import { makeRequest } from '../helpers/makeRequest';

export const getUserId = async (req, res) => {
    const username = process.env.TWITTER_USER_NAME;
    const options =  {
        method: 'GET',
        headers: {'Authorization': process.env.BEARER_TOKEN }
    }
    const response = await makeRequest(`https://api.twitter.com/2/users/by/username/${username}`, options);
    res.send(response);
}