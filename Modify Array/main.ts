let Guests : string[] = ["Fahad","Fawad","Atif"];
// Guests.map((Friends)=> console.log(`Hello! ${Friends}, you are invited for dinner `));

let canNotAttend : string = "Fawad";
console.log(`${canNotAttend} can not make it for the dinner`);

let newGuest : string = "Ali";
Guests[Guests.indexOf(canNotAttend)] = newGuest ;
console.log(Guests);

Guests.map((Friends)=> console.log(`Hello ${Friends}!, you are invited for dinner `));
