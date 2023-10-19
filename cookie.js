
// returns cookie string if available, otherwise empty string
export function getCookie(name) {
  let cookie = document.cookie
    .split(";")
    .find((cookie) => cookie.includes(name + "="));
  if (cookie != null) {
    return cookie.split("=")[1];
  }
  return ""
}

// delete cookie by name
export function deleteCookie(name) {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;domain=.`+rootDomain();
}

// Set the cookie with the API key value
export function setCookie(name, value) {
  console.log(window.location.hostname)

  const expirationDate = new Date();
  expirationDate.setFullYear(expirationDate.getFullYear() + 1);
  document.cookie = `${name}=${value};expires=${expirationDate.toUTCString()};path=/;domain=.`+rootDomain();
}

function rootDomain() {
  let hostname = window.location.hostname
  let parts = hostname.split(".");
  if (parts.length <= 2)
    return hostname;
  parts = parts.slice(-3);
  if (['co','com'].indexOf(parts[1]) > -1)
    return parts.join('.');
  return parts.slice(-2).join('.');
}