import * as yup from "yup";

export const ConversationSchema = yup.object().shape({
  user: yup.string().required("Pole je povinné"),
  subject: yup.string().required("Pole je povinné").max(50),
  body: yup.string().required("Pole je povinné"),
});
