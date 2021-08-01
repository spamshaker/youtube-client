import {hasToken} from './getToken';
import {ACCESS_SCOPE} from './settings';

export function checkYoutubeAuth() {
  return hasToken(ACCESS_SCOPE);
}
