type car ={
    manufacturer : string
    model: string
    [key: string]:any
}

function create_car(manufacturer:string , model:string,features:Record<string,any>): car{
    return{
        manufacturer,
        model,
        ...features
    }
};

const myCar : car = create_car("BMW","2024",{color :"Black" , type : "hybrid"}
)
console.log(myCar);

