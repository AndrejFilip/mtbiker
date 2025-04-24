import { basicFetch, headers } from "../network/src/BasicFetch";
import { MessagesConversationPostProps } from "../types";

const url = process.env.NEXT_PUBLIC_ARTICLES_URL;

export const getMessages = () => {
  const data = basicFetch(`${url}/messages`);

  return data;
};

export const sendMessages = (message: MessagesConversationPostProps) => {
  const body = JSON.stringify(message);

  return basicFetch(`${url}/messages`, "POST", headers, body);
};

export const archiveMessage = ({
  id,
  archived,
}: {
  id: number;
  archived: boolean;
}) => {
  const body = JSON.stringify({ archived: archived });

  return basicFetch(`${url}/messages/${id}`, "PATCH", headers, body);
};

export const deleteMessage = (id: number) => {
  return basicFetch(`${url}/messages/${id}`, "DELEtE", headers);
};
