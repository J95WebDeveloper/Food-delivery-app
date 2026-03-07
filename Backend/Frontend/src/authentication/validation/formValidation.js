import { handleError } from "../../components/Toaster";

export const Validation = (values) => {
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  if (values.firstname === "") {
    handleError("firstname is required");
    return false;
  } else if (values.firstname.length < 3) {
    handleError("firstname length must be at least 3 characters long");
    return false;
  }

  if (values.lastname === "") {
    handleError("lastname is required");
    return false;
  }


  if (values.email === "") {
    handleError("email is required");
    return false;
  } else if (!email_pattern.test(values.email)) {
    handleError("This is not a valid format");
    return false;
  }

  if (values.street === "") {
    handleError("street is required");
    return false;
  }

  if (values.city === "") {
    handleError("email is required");
    return false;
  }

  if (values.state === "") {
    handleError("state is required");
    return false;
  }

  if (values.zipcode === "") {
    handleError("zipcode is required");
    return false;
  }

  if (values.country === "") {
    handleError("country name is required");
    return false;
  }

  if (values.phone === "") {
    handleError("phone number is required");
    return false;
  }else if(values.phone.length < 10){
    handleError("Enter the valid number");
    return false;
  }

  return true;
};
