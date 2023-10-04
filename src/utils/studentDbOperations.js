import Student from "../database/modal/Students.js";
/**
 *
 */

export const studentDbOperations = async (message, studentStatus) => {
  studentStatus = "lavesh.k@internshala.com"
  try {
    const query = { email: studentStatus };
    const update = {
      $set: {
        inCommunity: true,
        isVerified: true,
        userDiscordId: message.member.user.id,
        userDiscordName: message.member.user.username,
      },
    };

    const updatedData = await Student.updateOne(query, update);
    if (updatedData.modifiedCount > 0) {
      return message.reply({
        content: "Verification Successful! Your roles have been assigned.",
      });
    } else {
      return message.reply({
        content: "User was not found.",
      });
    }
  } catch (error) {
    console.error("Error updating student data:", error);
    return message.reply({
      content:
        "An error occurred while processing your registration. Please try again or contact support.",
    });
  }
};
