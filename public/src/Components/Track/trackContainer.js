import track from "./track.js";

export default function trackContainer() {
  //trackContainer has a standart image and a loading description
  let current_track = new track();
  //This will display a loading screen until the promise is resolved
  appendHTML(current_track.exportAsHtml());

  //Now we append the new TrackContainer to our html contentContainer
  console.log(current_track);
  //Now we load the last track into our object
  current_track.populate().then(
    function(result) {
      console.log("Worked"); // "Stuff worked!"
      //Now we rerender our displayed image
      console.log(current_track);
      appendHTML(current_track.exportAsHtml());
    },
    function(err) {
      console.log("Eroorr", err); // Error: "It broke"
    }
  );
}

function appendHTML(html) {
  let contentContainer = document.querySelector(".contentContainer");
  contentContainer.innerHTML = html;
}
