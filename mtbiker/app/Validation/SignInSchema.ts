import * as yup from "yup";

export const SignInSchema = yup.object().shape({
  email: yup.string().required("Email je potrebný"),
  password: yup.string().required("Heslo je potrebné"),
});
