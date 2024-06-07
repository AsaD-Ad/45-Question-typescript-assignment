"use strict";
function make_album(artistName, albumName) {
    return { artistName, albumName };
}
let album1 = make_album("Arijit Singh", "Soul of music");
let album2 = make_album("Atif Aslam", "Hidden Beauty");
let album3 = make_album("Asad Ali", "New Journey");
console.log(album1);
console.log(album2);
console.log(album3);
function make_album01(artistName, albumName, noOfTracks) {
    return { artistName, albumName, noOfTracks };
}
let album4 = make_album01("Rahat Fateh Ali Khan", "Ishq", 12);
let album5 = make_album01("Darshan Raval", "Flawless", 7);
let album6 = make_album01("Faris Shafi", "Medicinal", 9);
console.log(album4);
console.log(album5);
console.log(album6);
