import multer from 'multer';
import { existsSync, mkdirSync } from 'fs';

const directory = './uploads';
if(!existsSync(directory)) {
    mkdirSync(directory);
}

export const storage = multer.diskStorage({

    destination: (req, file, callback) => {
        callback(null, 'uploads');
    },

    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }

})
