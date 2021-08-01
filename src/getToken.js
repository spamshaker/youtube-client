export function getToken(scope) {
  return sessionStorage.getItem(scope.join(' '));
}

export function hasToken(scope){
  return getToken(scope) !== null;
}
