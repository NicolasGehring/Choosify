import apiCaller from "../../services/apiCaller.js";

export default class track {
  constructor() {
    this.loading = true;
  }
  async populate() {
    this.currentTrackPlaying = await apiCaller.getSpotifyData(
      "currently_played"
    );
    console.log(
      "This is the response from the current playing",
      this.currentTrackPlaying
    );
    this.title = this.currentTrackPlaying.item.name;
    this.artists = this.currentTrackPlaying.item.artists;
    this.album_images = this.currentTrackPlaying.item.album.images;

    //Update loading so the new content is displayed
    this.loading = false;
  }

  exportAsHtml() {
    if (this.loading) {
      return `
    <img src = "../../../assets/loading.gif"class = "loading"
    } alt="Loading Image"></img>`;
    } else {
      //The content is there so we need to constructo our new html
      return `
      <img src = ${
        this.album_images[0].url
      } class = "coverImage"  alt="Cover Image"></img>
      <p> Currently Playing: ${this.title} </p>`;
    }
  }
}
