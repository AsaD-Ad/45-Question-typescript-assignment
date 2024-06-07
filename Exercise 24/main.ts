let city1 = "Karachi"
let city2 = "Lahore"

console.log(city1=="Karachi"); //true
console.log(city1 !== 'Karachi'); //false

console.log(city1.toLowerCase() == 'karachi') //true
console.log(city2.toLowerCase() == 'Lahore'); //false

let num1 = 2
let num2 = 4

console.log(num1 < num2) //true
console.log(num1 > 4 ) //false
console.log(num1 == num2) //false
console.log(num2 == 4) //true
console.log(num1 <= 2) //true
console.log(num2 >= 5) //false
console.log((num1 < 3) && (num1 > 1)) //true
console.log((num1 < 1) && (num1 > 3)) //false
console.log((num2 > num1) || (num2 < num1 )); //true

let array = ["Asad","Ali","Rana"]
console.log(array.includes("Asad")) //true 
console.log(!array.includes("Fahad")); //true
