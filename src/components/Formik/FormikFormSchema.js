import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
//min 5 characters, 1 uppercase, 1 lowercase, 1 numeric digit

export const FormikFormSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email Required"),
  password: yup
    .string()
    .matches(passwordRules, {
      message:
        "Please create a password containing //min 5 characters, 1 uppercase, 1 lowercase, 1 numeric digit",
    })
    .required("Password required"),
});
