import axios from "axios";

/**
 * Checks if the user has purchased the code.
 * @param {boolean} userPurchased - Indicates whether the user has purchased the code.
 * @param {string} batch - The batch information associated with the purchase.
 * @returns {Object|boolean} If the user has purchased the code, returns an object with properties {user: true, batch: batch}.
 *                           If not, returns false.
 */

export const getStudentStatus = (message) => {
  try {
    let data = JSON.stringify({
      email: message.content
    });

    console.log(data)

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:8080/api/v1/user/register",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        return (JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
        return false;
      });

  } catch (error) {
    console.error("Error fetching student status:", error);
    return false;
  }
};
