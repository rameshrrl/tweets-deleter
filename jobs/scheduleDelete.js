import { CronJob } from 'cron';
import { deleteMultiple } from '../controllers/mutipleTweetDelete.controller';

export const scheduleDelete = new CronJob('0 0,8,16 * * *', () => {
    console.log('Cron job invoked!');
    deleteMultiple();
});