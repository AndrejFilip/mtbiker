import { basicFetch, headers } from "../network/src/BasicFetch";
import { MessagesConversationPostProps } from "../types";

const url = process.env.NEXT_PUBLIC_ARTICLES_URL;

export const getMessages = () => {
  const data = basicFetch(`${url}/messages`);

  return data;
};

export const sendMessages = (message: MessagesConversationPostProps) => {
  const body = message;

  return basicFetch(`${url}/messages`, "POST", headers, body);
};

export const archiveMessage = ({
  id,
  archived,
}: {
  id: number;
  archived: boolean;
}) => {
  const body = { archived };

  return basicFetch(`${url}/messages/${id}`, "PATCH", headers, body);
};

export const readMessage = ({
  id,
  unread,
}: {
  id: number;
  unread: boolean;
}) => {
  const body = { unread };

  return basicFetch(`${url}/messages/${id}`, "PATCH", headers, body);
};

export const deleteMessage = (id: number) => {
  return basicFetch(`${url}/messages/${id}`, "DELEtE", headers);
};
