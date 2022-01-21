import { generateResponse } from '../helpers/response';
import { readFile } from 'fs/promises';


export const showLogs = async (req, res) => {

    try {

        const directory = './logs/log.txt'

        let logs = await readFile(directory, 'utf-8');

        logs = logs.replace(/(\r\n|\n|\r)/gm, ' ');

        res.status(200).send(generateResponse('Logs generated successfully!', true, logs));

    } catch (error) {
        res.status(500).send(generateResponse('Error in generating logs!'));
    }

}