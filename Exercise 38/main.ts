function city_country(city : string,country: string="Pakistan"){
    return `${city} is in ${country}`
}
let city1 = city_country("Karachi");
let city2 =city_country ("New York" ,"USA");
let city3 = city_country("Dhaka","Bangladesh");
let city4 = city_country("Tehran","Iran");

console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);