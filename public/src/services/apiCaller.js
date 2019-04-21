import tokenHandler from "../Login/tokenHandler.js";

async function apiCall(url) {
  const access_token = localStorage.getItem("access_token");

  return fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  });
}

async function getSpotifyData(type) {
  let url;
  switch (type) {
    case "user":
      url = "https://api.spotify.com/v1/me";
      break;
    case "currently_played":
      url = "https://api.spotify.com/v1/me/player/currently-playing";
      break;
    default:
      throw `Es gibt keinen Endpunkt für ${type}`;
      break;
  }
  try {
    const response = await apiCall(url);
    // Here we  handle expired acces_tokens
    console.log("Resonse from apiCaller", response);
    const status = response.status;

    switch (status) {
      case 401:
        //The acces token is expired an we need to login again
        console.log("refreshing acces token");
        tokenHandler.refreshToken();
        break;
      case 204:
        //Nothing is playing
        console.log("Nothing is playing right now");
        break;
      default:
        break;
    }
    return response.json();
  } catch (error) {
    console.log("Failed to resolve api response", error);
    throw error;
  }
}

export default { getSpotifyData };
