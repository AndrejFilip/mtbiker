export const headers = {
  "Content-type": "application/json",
};

export const basicFetch = async (
  url: string,
  method = "GET",
  headers?: HeadersInit,
  body?: any
) => {
  body = body ? JSON.stringify(body) : null;
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
