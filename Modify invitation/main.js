var Guests = ["Fahad", "Fawad", "Atif"];
// Guests.map((Friends)=> console.log(`Hello! ${Friends}, you are invited for dinner at my home`));
var canNotAttend = "Fawad";
// console.log(`${canNotAttend} can not make it for the dinner`);
var newGuest = "Ali";
Guests[Guests.indexOf(canNotAttend)] = newGuest;
// console.log(Guests);
// .map((Friends)=> console.log(`HGuestsello! ${Friends}, you are invited for dinner at my home`));
console.log("We got a bigger dinner table");
Guests.unshift("Shaheer");
console.log(Guests);
var middleGuest = "Asad";
var middleindex = Guests.length / 2;
Guests.splice(middleindex, 0, middleGuest);
console.log(Guests);
Guests.push("Hamza");
Guests.map(function (Friends) { return console.log("\nHello ".concat(Friends, "!, you are invited for dinner ")); });
