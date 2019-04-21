export default function button(text,id, onclick, containerClass) {
  let subTitleContainer = document.querySelector(`.${containerClass}`);

  var loginButton = document.createElement("button");
  loginButton.innerHTML = text;
  loginButton.onclick = onclick;
  loginButton.setAttribute("id", id);
  subTitleContainer.appendChild(loginButton);
}
