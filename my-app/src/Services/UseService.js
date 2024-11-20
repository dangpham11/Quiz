import axios from "./Customize-axios";

const loginApi = async (loginData) => {
  try {
    const response = await axios.post("/Account/login", loginData);
    return response.data; // Return UserDto
  } catch (error) {
    console.error("API Error:", error); // Log full error for debugging
    throw error.response?.data || "Login failed";
  }
};
const registerApi = async (data) => {
  try {
    const response = await axios.post("/Account/register", data);
    return response.data; // Return UserDto
  } catch (error) {
    console.error("API Error:", error); // Log full error for debugging
    throw error.response?.data || "Register failed";
  }
};

export { loginApi, registerApi };
