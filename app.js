/********** 
 Part One
***********
Create a class for vehicle. Each vehicle instance should have the following properties: 
- make
- model
- year

*/

class Vehicle {
  constructor(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
  }
  
  honk(){
    return 'BEEP'
  }

  toString(){
    return `The vehicle is a ${this.make} ${this.model} from ${this.year}`
  }

}

/*
const car1 = new Vehicle("Acura", "TL", 1993);

car1.toString(); //'The vehicle is a Acura TL from 1993'

car1.honk(); // 'BEEP'
*/



/********** 
 Part Two
***********

Create a class for a car. The Car class should inherit from Vehicle and each car instance should have a property called numWheels which has a value of 4.

*/

class Car extends Vehicle{
  constructor(make, model, year){
    super(make, model, year);
    this.numWheels = 4;
  }
}


/*
const car2 = new Car("Ford", "F-150", 2022);

car2.toString(); // 'The vehicle is a Ford F-150 from 2022'
car2.honk(); // 'BEEP'
car2.numWheels; // 4

*/



/********** 
 Part Three
***********

Create a class for a Motorcycle. This class should inherit from Vehicle and each motorcycle instance should have a property called numWheels which has a value of 2. It should also have a revEngine method which returns “VROOM!!!”

*/

class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 2;
  }

  revEngine() {
    return "VROOM!!!";
  }
}

/*
const motorCycle1 = new Motorcycle("Honda", "Nighthawk", 2000);

motorCycle1.toString(); // 'The vehicle is a Honda Nighthawk from 2000'
motorCycle1.honk(); // 'BEEP' 
motorCycle1.revEngine(); // 'VROOM!!!'
motorCycle1.numWheels(); // 2

*/



/********** 
 Part Four
***********

Create a class for a Garage. It should have a property called vehicles which will store an array of vehicles, and a property called capacity which is a number indicating how many vehicles will fit in the garage. When you create a garage, vehicles will always be empty; you only need to provide the capacity.

A garage should also have an add method, which attempts to add a vehicle to the array of vehicles. However, if you try to add something which is not a vehicle, the garage should return the message “Only vehicles are allowed in here!”. Also, if the garage is at capacity, it should say “Sorry, we’re full.”

*/

class Garage {
  constructor (capacity){
    this.vehicles = [];
    this.capacity = capacity;
  }


  add(newVehicle){
    if(!(newVehicle instanceof Vehicle)){
      return "Only Vehicles are allowed!";
    }
    if (this.vehicles.length >= this.capacity){
      return "Sorry, we are full.";
    }
    this.vehicles.push(newVehicle);
    return "Vehicle added!";
  }
}


/*
const garageSJ = new Garage(5);

garageSJ.add(new Vehicle("Acura", "TL", 1993));
garageSJ.add(new Motorcycle("Honda", "Nighthawk", 2000));

garageSJ.vehicles; // [Vehicle, Motorcycle]

garageSJ.vehicles[1]; // Vehicle {make: 'Acura', model: 'TL', year: 1993}

*/

