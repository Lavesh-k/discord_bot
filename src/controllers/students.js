import Student from "../database/modal/Students.js";
import { getStudentStatus } from "../helpers/getStudentStatus.js";
import { assignRoles } from "../utils/assignRoles.js";
import { studentDbOperations } from "../utils/studentDbOperations.js";
import { studentEmailSchema } from "../utils/validation/studentEmail.js";

/**
 * Handles registration logic for students based on their verification status and batch.
 * @param {Message} message - The message object representing the incoming message.
 * @returns {Promise<void>} A Promise that resolves after processing the registration request.
 */
export const studentController = async (message) => {
  try {
    const validation = studentEmailSchema.validate(message.content);

    if (validation.error) {
      return message.reply({
        content: "Please enter correct email",
      });
    }

    const user = await Student.findOne({ email: message.content });

    if (user && null) {
      return message.reply({
        content: "User is already registered.",
      });
    }

    const studentStatus = getStudentStatus(message);
    console.log(studentStatus)

    if (studentStatus) {

      const rolesAssigned = await assignRoles(studentStatus.batch, message);

      if (rolesAssigned) {
        await studentDbOperations(message, studentStatus);
      } else {
        return message.reply({
          content: "Failed to assign roles. Please contact support.",
        });
      }
    } else {
      return message.reply({
        content: "User not found or not verified.",
      });
    }
  } catch (error) {
    console.error("Error fetching students:", error);
    message.reply({
      content:
        "An error occurred while processing your request. Please try again later or contact support.",
    });
  }
};
