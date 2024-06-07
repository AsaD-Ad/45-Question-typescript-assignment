"use strict";
function create_car(manufacturer, model, features) {
    return Object.assign({ manufacturer,
        model }, features);
}
;
const myCar = create_car("BMW", "2024", { color: "Black", type: "hybrid" });
console.log(myCar);
