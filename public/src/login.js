function loginHandler() {
  alert(1);
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
