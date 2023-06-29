const jessica1 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};

//Shallow Copy/////

const jessicaCopy = Object.assign({}, jessica1);
jessicaCopy.lastname = "Valle";
console.log(jessica1);
console.log(jessicaCopy);
