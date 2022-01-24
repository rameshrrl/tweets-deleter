import { writeFile, readFile } from 'fs/promises';
import { existsSync, mkdirSync } from 'fs';

const directory = './logs';
if(!existsSync(directory)) {
    mkdirSync(directory);
}

export const logDeleted = async (deletedId) => {

    const fetchedData = await readFile(`${directory}/log.txt`, 'utf-8');

    const data = `${fetchedData} \r\n ${deletedId}`

    const writtenData = await writeFile(`${directory}/log.txt`, data)

    if(writtenData == undefined) return console.log('Logs updated!');

}