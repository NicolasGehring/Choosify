import button from "./Components/button.js";
import login from "./Login/login.js";
import title from "./Components/title.js"
window.addEventListener("load", start, false);

function start() {
  //We clear the local storage so the title displaying works
  localStorage.clear();

  button(login.loginHandler, "contentContainer");
  title('titleContainer')
}
