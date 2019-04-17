export default function button(onclick, containerClass) {
  let subTitleContainer = document.querySelector(`.${containerClass}`);

  var loginButton = document.createElement("button");
  loginButton.innerHTML = "Login with Spotify";
  loginButton.onclick = onclick;
  loginButton.setAttribute("id", "loginButton");
  subTitleContainer.appendChild(loginButton);
}
