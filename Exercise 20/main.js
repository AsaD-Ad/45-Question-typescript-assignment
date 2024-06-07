"use strict";
let cities = ["Karachi", "Lahore", "Hyderabad", "Islamabad"];
console.log("list of cities:");
for (const city in cities) {
    console.log(`${city}:${cities[city]}`);
}
;
