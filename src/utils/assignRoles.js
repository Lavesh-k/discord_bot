/**
 * Assigns roles to the verified user based on their batch and verification status.
 * @param {Message} message - The message object representing the incoming message.
 * @returns {Promise<boolean>} Returns true if roles are successfully assigned, false otherwise.
 */
export const assignRoles = async ( batch ,message) => {
    try {
      batch = "may15"
      const verifiedRole = message.guild.roles.cache.find((role) => role.name === batch);
      const batchRole = message.guild.roles.cache.find((role) => role.name === "Verified");
      const member = message.member;
  
      // Add roles to the member
      await member.roles.add([batchRole, verifiedRole]);
  
      return true;
    } catch (error) {
      console.error("Error assigning roles:", error);
      message.reply({
        content: "An error occurred while assigning roles. Please contact support.",
      });
      return false;
    }
  };
  