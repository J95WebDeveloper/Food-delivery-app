import axios from "axios";
import { handleError, handleSuccess } from "../components/Toaster";


export const useLogin = async (values, setOpenLogin, setToken, setUser) => {
  try {
    await axios
      .post("http://localhost:3000/api/login", values)
      .then((res) => {
          console.log(res.data);
          handleSuccess(res.data.message);
          setToken(res.data.token)
          setUser(res.data.user.name);
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('user', JSON.stringify(res.data.user))
          setTimeout(() => {
            setOpenLogin(false)
          }, 1000);
      })
      .catch((err) => {
        console.log(err)
        handleError(err.response.data.message);
      });
  } catch (error) {
    console.log(error);
  }
};
