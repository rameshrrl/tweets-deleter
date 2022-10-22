import { CronJob } from 'cron';
import { scheduleTweetDelete } from '../controllers/scheduleTweetDelete.controller.js';
//Scheduled for every 1 hour

export const scheduleDelete = new CronJob('0 * * * *', () => {
    console.log('Cron job invoked!');
    scheduleTweetDelete();
});