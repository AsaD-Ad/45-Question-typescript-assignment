"use strict";
let magicians = ["Azam", "Afridi", "Khalid", "Qamar"];
function show_magician() {
    for (let mag of magicians) {
        console.log(mag);
    }
}
function make_great() {
    for (let mag of magicians) {
        console.log(mag + " The Great");
    }
}
show_magician();
make_great();
