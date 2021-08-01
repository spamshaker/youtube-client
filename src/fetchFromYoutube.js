import {createApiService} from './createApiService';
import {getToken} from './getToken';
import {ACCESS_SCOPE} from './settings';

export function fetchFromYoutube(endpoint, args) {
  const token = getToken(ACCESS_SCOPE);
  return fetch(createApiService('youtube', 'v3', endpoint)(args), {
    headers: {
      'authorization': `Bearer ${token}`
    }
  }).then(res => res.json());
}
