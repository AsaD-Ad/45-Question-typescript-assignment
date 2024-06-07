var Guests = ["Fahad", "Fawad", "Atif"];
Guests.map(function (Friends) { return console.log("Hello! ".concat(Friends, ", you are invited for dinner ")); });
var canNotAttend = "Fawad";
console.log("".concat(canNotAttend, " can not make it for the dinner"));
var newGuest = "Ali";
Guests[Guests.indexOf(canNotAttend)] = newGuest;
console.log(Guests);
Guests.map(function (Friends) { return console.log("Hello ".concat(Friends, "!, you are invited for dinner ")); });
