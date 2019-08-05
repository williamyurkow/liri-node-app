require("dotenv").config();
//storing a path for the keys
var keys = require("./keys.js");
var fs = require("fs");
var Spotify = require("node-spotify-api")
var axios = require("axios");
var moment = require("moment");
var spotify = new Spotify(keys.spotify);
console.log(spotify)


var getArtistName = function (artist) {
  return artist.name;
};

var getMeSpotify = function (song) {
if (song === undefined) {
  song = "whats my age again";
}
spotify.search ( {
  type: "track",
  query: song
},
 function(err, data) {
   if(err){
     console.log("error" + err);
     return;
   }

var songs = data.tracks.items;

for ( i = 0; i < songs.length; i++) {
  console.log(i);
  console.log("artist(s):" + songs[i].artists.map(getArtistName));
  console.log("song name:" + songs[i].name);
  console.log("preview song:" + songs[i].preview_url);
  console.log("album: " + songs[i].album.name);
  console.log("----------------------------------");

}

 }

 );

};

var getMyBands = function(artist) {
var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

axios.get(queryURL).then(
  function (response) {
    var jsonData = response.data;
    if (!jsonData.length) {
      console.log("No results found for " + artist); 
      return;
    }
console.log("Upcoming concerts for " + artist + ":"); 

for (var i = 0; i < jsonData.length; i++) {
  var show = jsonData[i];

  console.log(
    show.venue.city + "," + (show.venue.region || show.venue.country) +
    " at " + 
    show.venue.name +
    " " +
    moment(show.datetime).format("MM/DD/YYYY")

  );
}

  }
)
}

getMyBands("greta van fleet")