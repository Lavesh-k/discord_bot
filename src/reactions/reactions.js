import { client } from "../configuration/bot.js";
import { studentController } from "../controllers/students.js";

/**
 * Determines if the message is initiated from the correct channel and invokes the messageReactions function accordingly.
 * @returns {void} This function handles the message reactions based on the correct channel initiation.
 */

export const verifyUser = async () => {
  client.on("messageCreate", async (message) => {
    try {
      if (message.author.bot || message.channel.id !== process.env.CHANNEL_ID)
        return;
      studentController(message)
    } catch (error) {
      console.log(error);
    }
  });
};
