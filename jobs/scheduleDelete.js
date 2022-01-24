import { CronJob } from 'cron';
import { scheduleDelete } from '../controllers/mutipleTweetDelete.controller';

//Scheduled for every 1 hour

export const scheduleDelete = new CronJob('0 * * * *', () => {
    console.log('Cron job invoked!');
    scheduleDelete();
});