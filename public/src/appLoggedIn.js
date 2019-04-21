import tokenHandler from "./Login/tokenHandler.js";
import title from "./Components/title.js";
import  trackContainer  from "./Components/Track/trackContainer.js";

//First we check the token and verify, that the user is logged in
tokenHandler.handleAccessToken();
//Now we initialize the webpage
title("titleContainer")
trackContainer()
