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
