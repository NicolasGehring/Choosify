import apiCaller from "../services/apiCaller.js";
import isLoggedIn from "../Login/isLoggedIn.js";

function generateTitle() {
  const greetings = ["my friend", "Pinzi"];

  const greeting = greetings[Math.floor(Math.random() * greetings.length)];
  return "Welcome to Choosify ".concat(greeting);
}

export default async  function title(containerClass) {
  let title = generateTitle();
  //We want to greet the user with his real name if he is logged in

  if (isLoggedIn()) {
    title = await apiCaller.getSpotifyData("user").then(
      function(value) {
        return `Welcome ${value.display_name}`;
      },
      function(err) {
        console.log(err);
      }
    );
  }
  
  let subTitleContainer = document.querySelector(`.${containerClass}`);
  var subTitle = document.createElement("h2");
  subTitle.textContent = title;
  //Append the new h2
  subTitleContainer.appendChild(subTitle);
}
