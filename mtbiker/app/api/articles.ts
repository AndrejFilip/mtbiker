import { basicFetch } from "../network/src/BasicFetch";

basicFetch;

export const getMagazineArticles =
  ({ page, limit, tags }: { page: number; limit: number; tags?: string }) =>
  () => {
    const url = "http://localhost:3001";
    if (tags === "ALL") {
      const data = basicFetch(`${url}/articles?_page=${page}&_limit=${limit}`);

      console.log(data);
      return data;
    } else {
      const data = basicFetch(
        `${url}/articles?_page=${page}&_limit=${limit}&tags_like=${tags}`
      );

      console.log(data);
      return data;
    }
  };

export const getMagazineArticlesFull = () => () => {
  const url = "http://localhost:3001";
  const data = basicFetch(`${url}/articles?_page=1`);

  console.log(data);
  return data;
};
