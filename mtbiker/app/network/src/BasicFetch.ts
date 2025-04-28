export const headers = {
  "Content-type": "application/json",
};

export const basicFetch = async <T>(
  url: string,
  method = "GET",
  headers?: HeadersInit,
  body?: T
): Promise<T> => {
  const stringifiedBody = body ? JSON.stringify(body) : undefined;
  const response = await fetch(url, {
    cache: "no-store",
    method,
    headers,
    body: stringifiedBody,
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
