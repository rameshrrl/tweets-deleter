import { CronJob } from 'cron';
import { deleteMultiple } from '../controllers/mutipleTweetDelete.controller';

//Scheduled for every 8 hours

export const scheduleDelete = new CronJob('0 0,8,16 * * *', () => {
    console.log('Cron job invoked!');
    deleteMultiple();
});