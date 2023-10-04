import "dotenv/config.js";

import { client } from './src/configuration/bot.js';
import { verifyUser} from './src/commands/commands.js'
import cronRun from './src/mailing/emailSender.js'
import mongoConnect from "./src/database/connection/connection.js";

client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// ne code 
mongoConnect()
cronRun()

client.login(process.env.TOKEN).then(() => {
    verifyUser()
})





