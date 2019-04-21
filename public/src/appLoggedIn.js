import tokenHandler from "./Login/tokenHandler.js";
import title from "./Components/title.js";
import trackContainer from "./Components/Track/trackContainer.js";
import linkBar from "./Components/links.js";
import logout from "./Login/logout.js";
import button from "./Components/button.js";

//First we check the token and verify, that the user is logged in
tokenHandler.handleAccessToken();
//Now we initialize the webpage
title("titleContainer");
trackContainer();
linkBar();
button("Logout", "logoutButton", logout, "redirectContainer");
