import { basicFetch } from "../network/src/BasicFetch";

const url = process.env.NEXT_PUBLIC_ARTICLES_URL;

export const getMessages = () => {
  const data = basicFetch(`${url}/messages`);

  return data;
};
