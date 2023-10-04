import "dotenv/config.js";
import mongoConnect from './src/connection/connection.js'
import { client } from './src/configuration/bot.js';
import { verifyUser} from './src/commands/commands.js'
import cronRun from './src/mailing/emailSender.js'

client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

mongoConnect()
cronRun()

client.login(process.env.TOKEN).then(() => {
    verifyUser()
})





