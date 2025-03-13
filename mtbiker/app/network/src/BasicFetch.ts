export const basicFetch = async (
  url: string,
  method = "GET",
  headers?: any,
  body?: any
) => {
  const response = await fetch(url, {
    cache: "no-store",
    method,
    headers,
    body,
  });

  const data = response.json();

  if (response.ok) {
    return data;
  }

  throw {
    name: String(response.status),
    message: response.statusText,
  };
};
