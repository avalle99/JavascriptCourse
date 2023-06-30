"use strict";

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, "Alejandro Valle");
lufthansa.book(635, "Michael Sanchez");
console.log(lufthansa);

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

//No funciona ya que This depende del contexto en que se llame
const book = lufthansa.book;
// book(23, "Sarah Williams");

//Call method. El primer parametro es adonde "this" se dirigira
book.call(eurowings, 23, "Abraham Rodriguez");

console.log(lufthansa);
console.log(eurowings);

//Apply method. Funciona igual que call pero no recibe argumentos por separado. Sino que en un array

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

const flightData = [583, "Gorge Clooney"];
book.apply(swiss, flightData);

//bind method. Returns una nueva function con el this keyword siempre bound al object que le pasemos de parametro
const bookEW = book.bind(eurowings);
bookEW(23, "Steven Williams");

//function with predefined argument of 23
const bookEW23 = book.bind(eurowings, 23);
bookEW23("Vasquez Velasquez");

//With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPLane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

//This en event handlers se dispara al elemento ligado al evento
//Se utiliza bind ya que call activa la funcion mientras que bind retorna una nueva function
document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPLane.bind(lufthansa));

//Partial applications(Means that we can preset parameters)
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 20));

const addVAT = addTax.bind(null, 0.23);
addVAT = (value) => value + value * 0.23; //Equivalente a la linea de arriba
