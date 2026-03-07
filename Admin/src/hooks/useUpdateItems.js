import axios from "axios";
import { handleSuccess } from "../components/Toaster";


export const useUpdateItems = async (formData) => {
  try {
    await axios
      .post(`http://localhost:3000/api/food/addFood/updateFood/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
        handleSuccess(res.data.message);
      });
  } catch (error) {
    console.log(error);
  }
};
