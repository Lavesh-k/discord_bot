import { client } from "../configuration/bot.js";
import studentSchema from "../modal/Students.js";

const messageReaction = async (message) => {
    try {
        let result = await studentSchema.findOneAndUpdate({ email: message.content }, { $set: { inCommunity: true, verified: true } });
        if (result != null) {
            const verifiedRole = message.guild.roles.cache.find((role) => role.name === result.batch);
            const batchRole = message.guild.roles.cache.find((role) => role.name === 'Verified');
            const member = message.member;
            await member.roles.add([batchRole, verifiedRole]);
            return true;
        }
        else {
            return false
        }
    } catch (error) {
        console.error('Error fetching students:', error);
    }
}

export const verifyUser = async () => {
    client.on('messageCreate', async (message) => {
        try {
            if (message.author.bot || message.channel.id !== '1134008883732557904') return;
            messageReaction(message).then((e) => {
                if (e) {
                    message.reply({
                        content: "Verification Successfull!. Your roles has been assigned to you!"
                    })
                }
                else {
                    message.reply({
                        content: "unregistered email"
                    })
                }
            })
        } catch (error) {
            console.log(error)
        }
    })
}

