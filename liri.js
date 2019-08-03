require("dotenv").config();
//storing a path for the keys
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var fs = require("fs");
var axios = require("axios");
var moment = require("moment") 

var input1 = process.argv[2];
var input2 = process.argvp[3];



axios.get().then(
  function(response) {
    console.log("The movie's rating is: " + response.data.imdbRating);
  })





function concertThis() {

    axios.get(`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`).then(
  function(response) {
    console.log(response.data);
  })
    
}

function spotifyThisSong() {
    
}


function movieThis() {
    
}

function doWhatItSays() {
    
}