import {createQuery} from './createQuery';

export function createApiService(destination, version, endpoint) {
  return (urlParams) =>
    createQuery(new URL(`https://${destination}.googleapis.com/${destination}/${version}/${endpoint}`), urlParams);
}
