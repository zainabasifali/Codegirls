// This is a parent class
class Vehicle{
    constructor(type_name , model , year){
         this.type_name = type_name;
         this.model = model;
         this.year = year;
    }

    start = ()=>{
       console.log("The "+this.type_name+" is statred")
    }
    close = ()=>{
        console.log("The "+this.type_name+" is closed")
    }
    display_details = ()=>{
        console.log("This vehicle is a "+this.type_name)
        console.log(this.type_name + " model is "+ this.model)
        console.log(this.type_name + " year is "+ this.year)
    }
}

// Car is a vehicle
class Car extends Vehicle{
    constructor(type_name , model , year){
        super(type_name,model,year);
   }
}

//Truck is a vehicle
class Truck extends Vehicle{
    constructor(type_name , model , year){
        super(type_name,model,year);
   }
}

// Manual car is a car
class Manual extends Car{
    constructor(type_name, model, year){
        super(type_name, model, year); 
        this.transmission = "manual";
      }
    shift = ()=>{
        console.log("The " +this.transmission+" car requires the driver to shift gears manually");
    }
}

// Automatic car is a car
class Auto extends Car{
    constructor(type_name, model, year){
        super(type_name, model, year); 
        this.transmission = "automatic";
      }
    shift = ()=>{
        console.log("The " + this.transmission + " automatic car shifts gears automatically");
    }
}

// Objects
let c1 = new Manual("Car","Civic Sedan",2024);
c1.display_details();
c1.start();
c1.shift();
c1.close();

console.log("\n")

let t1 = new Truck("Truck","Chevy Silverado",2024);
t1.display_details();
t1.start();
t1.close();
