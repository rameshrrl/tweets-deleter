import { makeRequest } from '..//helpers/makeRequest';

export const deleteTweets = async (req, res) => {
    const response = await makeRequest('');
    res.send(response);
}