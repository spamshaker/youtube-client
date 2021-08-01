import {createQuery} from './createQuery';

export function createAuthService(client_id, response_type = 'token', base = 'https://accounts.google.com/o/oauth2/auth') {
  return (redirect_uri, scope, other) => createQuery(new URL(base), {
    client_id,
    redirect_uri,
    scope: scope.join(' '),
    access_type: 'online',
    prompt: 'consent',
    response_type,
    ...other
  });
}
