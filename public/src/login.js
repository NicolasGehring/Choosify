var stateKey = 'spotify_auth_state';

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
function generateRandomString(length) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

function getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }
  
function loginHandler() {

  var client_id = "849a4a8589ec4b97a5e58466d2c3f4c7"; // Your client id
  var redirect_uri = "http://localhost:3000"; // Your redirect uri

  var state = generateRandomString(16);

  localStorage.setItem(stateKey, state);
  var scope = "user-read-private user-read-email";

  var url = "https://accounts.spotify.com/authorize";
  url += "?response_type=token";
  url += "&client_id=" + encodeURIComponent(client_id);
  url += "&scope=" + encodeURIComponent(scope);
  url += "&redirect_uri=" + encodeURIComponent(redirect_uri);
  url += "&state=" + encodeURIComponent(state);

  window.location = url;

  var params = getHashParams();

        var access_token = params.access_token,
            state = params.state,
            storedState = localStorage.getItem(stateKey);

        if (access_token && (state == null || state !== storedState)) {
          alert('There was an error during the authentication');
        } else { 
            alert('Succes')
        }
}


function init() {
  let subTitleContainer = document.querySelector(".contentContainer");

  var loginButton = document.createElement("button");
  loginButton.innerHTML = "Login with Spotify";
  loginButton.onclick = loginHandler;
  loginButton.setAttribute("id", "loginButton");
  subTitleContainer.appendChild(loginButton);
}

export default { init };
