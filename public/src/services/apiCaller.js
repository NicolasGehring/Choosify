async function apiCall(url) {
  const access_token = localStorage.getItem("access_token");
  const header = new Headers({
    Authorization: "Bearer " + access_token
  });

  return fetch(url, {
    method: "GET",
    headers: header
  });
}

async function getSpotifyData(type) {
  let url;
  switch (type) {
    case "user":
      url = "https://api.spotify.com/v1/me";
      break;

    default:
      throw `Es gibt keinen Endpunkt für ${type}`;
      break;
  }
  try {
    const response = await apiCall(url);
    return response.json()
  } catch (error) {
    console.log("Failed to resolve api response", error);
    throw error;
  }
}

export default {getSpotifyData}