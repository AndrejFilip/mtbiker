export const basicFetch = async (url: string, method = "GET") => {
  const response = await fetch(url, { cache: "no-store", method });

  const data = response.json();

  if (response.ok) {
    return data;
  }

  throw {
    name: String(response.status),
    message: response.statusText,
  };
};
