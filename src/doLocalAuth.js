import {doRemoteAuth} from './doRemoteAuth';

export function doLocalAuth(scope) {
  const params = new URLSearchParams(location.hash.replace('#', ''));
  const urlCode = params.get('access_token');
  const urlScope = params.get('scope');
  if (urlCode && urlScope && scope.join(' ') === urlScope) {
    sessionStorage.setItem(urlScope, urlCode);
    location.href = location.origin;
  } else {
    doRemoteAuth(scope);
  }
}
