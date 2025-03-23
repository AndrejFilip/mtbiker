import * as yup from "yup";

export const ConversationSchema = yup.object().shape({
  user: yup.string().required("User is required"),
  subject: yup.string().required("Subject is required"),
  body: yup.string().required("Pole je povinné"),
});
