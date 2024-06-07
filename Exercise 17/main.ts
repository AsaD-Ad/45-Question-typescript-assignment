// Adding More Guest

let Guests : string[] = ["Fahad","Fawad","Atif"];
// Guests.map((Friends)=> console.log(`Hello! ${Friends}, you are invited for dinner `));

let canNotAttend : string = "Fawad";
// console.log(`${canNotAttend} can not make it for the dinner`);

let newGuest : string = "Ali";
Guests[Guests.indexOf(canNotAttend)] = newGuest ;
// console.log(Guests);

// Guests.map((Friends)=> console.log(`Hello ${Friends}!, you are invited for dinner `));
// Guests.map((Friends)=> console.log(`Hello! ${Friends} Its a Good news,we found a big table for dinner `));
Guests.unshift("Usman");
Guests.splice(2,0,"Bilal");
Guests.push("Ather");
// console.log(Guests);
// Guests.map((Friends)=> console.log(`Hello ${Friends}!, you are invited for dinner `));
console.log(`Unfortunately! New dinner table wont arrive in time thats why we have space only for two guests  `);
let remove1=Guests.pop()
console.log(Guests);
console.log(`Hello ${remove1}! I am sorry, I cant invite you to dinner due to unavailability of dinner table.`)
let remove2=Guests.pop()
console.log(Guests)
console.log(`Hello ${remove2}! I am sorry, I cant invite you to dinner due to unavailability of dinner table.`)
let remove3=Guests.pop()
console.log(Guests)
console.log(`Hello ${remove3}! I am sorry, I cant invite you to dinner due to unavailability of dinner table.`)
let remove4=Guests.pop()
console.log(Guests)
console.log(`Hello ${remove4}! I am sorry, I cant invite you to dinner due to unavailability of dinner table.`);
Guests.map((Friends)=>console.log(`Hello ${Friends}! You are invited to dinner `))
Guests.pop()
Guests.pop()
console.log(Guests);

