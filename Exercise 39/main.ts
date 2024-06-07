function city_country (city:string , country:string){
    return `"${city},${country}"`
}
let city_country1 = city_country("Lahore","Pakistan")
let city_country2 = city_country("Makkah","Saudia Arabia")
let city_country3 = city_country("Moscow","Russia")

console.log(city_country1);
console.log(city_country2);
console.log(city_country3);