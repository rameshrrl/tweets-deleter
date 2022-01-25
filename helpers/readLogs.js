import { readFile } from 'fs/promises';

export const ReadLogs = async () => {

    const directory = './logs/log.txt'

    let logs = await readFile(directory, 'utf-8');

    logs = logs.replace(/(\r\n|\n|\r)/gm, ' ').split(' ').filter(Boolean);

    return logs;
    
}