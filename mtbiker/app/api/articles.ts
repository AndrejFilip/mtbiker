import { basicFetch } from "../network/src/BasicFetch";

export const getMagazineArticles =
  ({ page, limit, tags }: { page: number; limit: number; tags?: string }) =>
  () => {
    const url = "http://localhost:3001";
    if (tags === "ALL") {
      const data = basicFetch(`${url}/articles?_page=${page}&_limit=${limit}`);

      return data;
    } else {
      const data = basicFetch(
        `${url}/articles?_page=${page}&_limit=${limit}&tags_like=${tags}`
      );
      return data;
    }
  };

export const getMagazineArticlesFull = () => () => {
  const url = "http://localhost:3001";
  const data = basicFetch(`${url}/articles?_page=1`);

  return data;
};

export const getMagazineArticle =
  ({ id }: { id: number }) =>
  () => {
    const url = "http://localhost:3001";
    const data = basicFetch(`${url}/articles/${id}`);

    return data;
  };
