import button from "./Components/button.js";
import login from "./Login/login.js";
import title from "./Components/title.js"
window.addEventListener("load", start, false);

function start() {
  button(login.loginHandler, "contentContainer");
  title('titleContainer')
}
