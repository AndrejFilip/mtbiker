import { basicFetch, headers } from "../network/src/BasicFetch";

const url = process.env.NEXT_PUBLIC_ARTICLES_URL;
export const getMagazineArticles =
  ({ page, limit, tags }: { page: number; limit: number; tags?: string }) =>
  () => {
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
  const data = basicFetch(`${url}/articles?_page=1`);

  return data;
};

export const getMagazineArticle =
  ({ id }: { id: number }) =>
  () => {
    const data = basicFetch(`${url}/articles/${id}`);

    return data;
  };

export const patchMagazineArticleLikes =
  ({ id, likes }: { id: number; likes: number }) =>
  () => {
    const body = { likes };

    const data = basicFetch(`${url}/articles/${id}`, "PATCH", headers, body);

    return data;
  };

export const patchMagazineArticleDislikes =
  ({ id, dislikes }: { id: number; dislikes: number }) =>
  () => {
    const body = { dislikes };

    const data = basicFetch(`${url}/articles/${id}`, "PATCH", headers, body);

    return data;
  };
