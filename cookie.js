
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
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;domain=`+window.location.hostname;
}

// Set the cookie with the API key value
export function setCookie(name, value) {
  console.log(window.location.hostname)

  const expirationDate = new Date();
  expirationDate.setFullYear(expirationDate.getFullYear() + 1);
  document.cookie = `${name}=${value};expires=${expirationDate.toUTCString()};path=/;domain=`+window.location.hostname;
}
