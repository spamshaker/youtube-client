export function createQuery(url, params) {
  Object.keys(params).forEach((key) => {
    url.searchParams.append(key, params[key]);
  });
  return url;
}
