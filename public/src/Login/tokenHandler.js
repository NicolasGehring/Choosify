import login from "./login.js";

var stateKey = "spotify_auth_state";

function storeKey(key) {
  localStorage.setItem("access_token", key);
}

function receiveKey() {
  return localStorage.getItem("access_token");
}

function getHashParams() {
  var hashParams = {};
  var e,
    r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1);
  while ((e = r.exec(q))) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;
}

function handleAccessToken() {
  //Don't run login again if user is already logged in
  if (!receiveKey()) {
    var params = getHashParams();
    var access_token = params.access_token,
      state = params.state,
      storedState = localStorage.getItem(stateKey);

    if (!access_token || state == null || state !== storedState) {
      //Something was wrong with the login and the user get's redirected to login page
      window.location.href = "/";
    } else {
      localStorage.removeItem(stateKey);
      storeKey(access_token);
      //Now go back to just /dashboard to get rid of the long url
      window.location.href = "/dashboard";
    }
  }
}

function refreshToken() {
  //Redo the user login
  login.loginHandler();
  var params = getHashParams();
  var access_token = params.access_token,
    state = params.state,
    storedState = localStorage.getItem(stateKey);

  if (!access_token || state == null || state !== storedState) {
    //Something was wrong with the login and the user get's redirected to login page
    window.location.href = "/";
  } else {
    localStorage.removeItem(stateKey);
    storeKey(access_token);
    //Now go back to just /dashboard to get rid of the long url
    window.location.href = "/dashboard";
  }
}

export default { handleAccessToken, refreshToken };
