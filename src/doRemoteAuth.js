import {createAuthService} from './createAuthService';
import {CLIENT_ID} from './settings';

export function doRemoteAuth(scope) {
  location.href = createAuthService(CLIENT_ID)(process.env.REDIRECT_URL || 'http://localhost:8000', scope).toString();
}
