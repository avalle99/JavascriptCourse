
// const hasDriversLicense = true;
// const hasGoodVision = true; 

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const isTired = false; 
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive');
// }



const country = "Honduras";
const continent = "America";
let population = 10000000;

const isIsland = false;
const language = "Spanish";

let averagePopulation = 33000000;


const description = `${country} is in ${continent}, and its ${population} people speak ${language}`;



console.log(country, continent, population, isIsland, language);



if(population > averagePopulation){
    console.log(`${country}'s populations is above average`);
}

else{
    console.log(`${country}'s populations is ${averagePopulation - population} below average`);
}

// const numNeighbours = Number(prompt("How many neighbour countries does your country have?"));

// if(numNeighbours === 1){
//     console.log("Only 1 border!");    // Loose equality
// }

// else if(numNeighbours > 1){
//     console.log("More than 1 border");
// }

// else{
//     console.log("No borders");
// }

if (language === "English" && population < 50000000 && isIsland === false){
  console.log(`You should live in ${country}`);
}
else{
  console.log(`${country} does not meet your criteria`);
}