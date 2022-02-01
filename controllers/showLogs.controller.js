import { generateResponse } from '../helpers/response';
import { readLogs } from '../helpers/readLogs';

export const showLogs = async (req, res) => {

    try {

        const logs = await readLogs();

        res.status(200).send(generateResponse('Logs generated successfully!', true, logs));

    } catch (error) {
        
        res.status(500).send(generateResponse('Error in generating logs!'));
    }

}