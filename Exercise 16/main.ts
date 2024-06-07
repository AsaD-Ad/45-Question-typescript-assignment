// Adding More Guest

let Guests : string[] = ["Fahad","Fawad","Atif"];
// Guests.map((Friends)=> console.log(`Hello! ${Friends}, you are invited for dinner `));

// let canNotAttend : string = "Fawad";
// console.log(`${canNotAttend} can not make it for the dinner`);

// let newGuest : string = "Ali";
// Guests[Guests.indexOf(canNotAttend)] = newGuest ;
// console.log(Guests);

// Guests.map((Friends)=> console.log(`Hello ${Friends}!, you are invited for dinner `));
// Guests.map((Friends)=> console.log(`Hello! ${Friends} Its a Good news,we found a big table for dinner `));
Guests.unshift("Usman");
Guests.splice(2,0,"Bilal");
Guests.push("Ather");
// console.log(Guests);
Guests.map((Friends)=> console.log(`Hello ${Friends}!, you are invited for dinner `));

