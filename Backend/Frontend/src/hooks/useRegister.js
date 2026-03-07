import axios from "axios";
import { handleError, handleSuccess } from "../components/Toaster";

export const useRegister = async (values, navigate, switchToLogin) => {
  try {
    await axios
      .post("/api/register", values)
      .then((res) => {
        console.log(res.data);
        handleSuccess(res.data.message);
        setTimeout(() => {
          switchToLogin(); // go back to login form
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
        handleError(err.response.data.message);
      });
  } catch (error) {
    console.log(error);
  }
};
