"use strict";

// Data needed for a later exercise

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

///Array destructuring///
// const arr = [2, 3, 4];

const [x, y, z] = arr;
console.log(x, y, z);

let [first, second] = restaurant.categories;
console.log(first, second);

[first, second] = [second, first];
console.log(main, secondary);

const [starter, main] = restaurant.order(2, 0);

const nested = [2, 4, [5, 6]];

const [i, , [j, k]] = nested;

//default values

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

///////////////////////////

///////Object destructuring//////////////
const { name, openingHours, categories } = restaurant;

//differnte name

const { name: nombre, openingHours: hours } = restaurant;

// Mutating variables

let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 14 };
({ a, b } = Obj);
console.log(a, b);

// Nested Objects

const {
  fri: { open, close },
} = openingHours;

//Spread operator

const arr = [7, 8, 9];
const badNewArr = [1, 2, ...arr];

///////REST/////////

//Spread right side of =
const arry = [1, 2, ...[3, 4]];

/////Rest. Left side of =
const [d, e, ...others] = [1, 2, 3, 4, 5];

///Rest in objects

const { sat, ...weekdays } = restaurant.openingHours;

//// Todo de arriba es destructuring

//uso de Spread y Rest en Functions abajo

const add = function (...numbers) {
  console.log(numbers);
};

add(2, 3);
add(5, 4, 4, 6, 7, 8);

////for of loop

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// console.log([...menu.entries()]);

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = (str) => str.slice(0, 3).toUpperCase();

for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const output = `${type.startsWith("_Delayed") ? "🔴" : ""}${type.replaceAll(
    "_",
    " "
  )} ${getCode(from)} ${getCode(to)} (${time.replace(":", "h")})`.padStart(36);
  console.log(output);
}
