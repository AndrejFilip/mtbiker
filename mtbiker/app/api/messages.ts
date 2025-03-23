import { basicFetch } from "../network/src/BasicFetch";
import { MessagesConversationPostProps } from "../types";

const url = process.env.NEXT_PUBLIC_ARTICLES_URL;

export const getMessages = () => {
  const data = basicFetch(`${url}/messages`);

  return data;
};

export const sendMessages = (message: MessagesConversationPostProps) => {
  const headers = {
    "Content-type": "application/json",
  };

  const body = JSON.stringify(message);

  return basicFetch(`${url}/messages`, "POST", headers, body);
};
