type Query = Record<string, string>;

const generateQuery = (query: Query) => {
  const queryKeys = Object.keys(query);

  if (queryKeys.length === 0) return '';

  const queryValues = queryKeys.map((key) => {
    if (!query[key]) return null;

    return `${key}=${query[key]}`;
  });

  const queryString = queryValues.filter((query) => query !== null).join('&');

  return queryString;
};

const parseURL = (url: string, query: Query) => {
  const [urlWithoutQueries, initialQueries] = url.split('?');

  const listOfQueries: string[] = [];
  if (initialQueries) listOfQueries.push(initialQueries);
  if (query) listOfQueries.push(generateQuery(query));

  const queryString = listOfQueries.length > 0 ? `?${listOfQueries.join('&')}` : '';
  return `${urlWithoutQueries}${queryString}`;
};

type FetcherOptions = {
  isFreshURL?: boolean;
};

type FetcherParams = RequestInit & {
  url: string;
  query?: Query;
  options?: FetcherOptions;
};

const fetcher = <ResponseBody>({ method = 'GET', ...args }: FetcherParams) => {
  return new Promise<ResponseBody>(async (resolve, reject) => {
    const finalUrl = args?.options?.isFreshURL ? args?.url : `${process.env.NEXT_PUBLIC_API_URL}${args?.url}`;

    const response = await fetch(parseURL(finalUrl, args?.query), {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      cache: args?.cache ?? args?.next ? undefined : 'no-store',
      ...args
    });

    const data = await response.json();

    if (!response.ok) {
      reject(data);
    }

    resolve(data as ResponseBody);
  });
};

export default fetcher;
