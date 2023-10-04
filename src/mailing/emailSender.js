import { CronJob } from 'cron';
import emailConfig  from './emailConfig.js';

const cronRun = () => {
    const job = new CronJob('0 * * * * *', () => {
        emailConfig()
    });
    
    job.start();
} 
export default cronRun;


