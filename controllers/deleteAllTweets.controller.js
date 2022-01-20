import { readFile } from 'fs/promises';

export const deleteAll = async (req, res) => {

    const data = await readFile(req.file.path);
    
}