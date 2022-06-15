import { CronJob } from 'cron';
import { scheduleTweetDelete } from '../controllers/scheduleTweetDelete.controller';
//Scheduled for every 1 hour

export const scheduleDelete = new CronJob('* * * * *', () => {
    console.log('Cron job invoked!');
    scheduleTweetDelete();
});