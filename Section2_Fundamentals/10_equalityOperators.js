// const age = '18';
// if (age === 18) console.log('You just became an adult :D (strict)');

// if (age == 18) console.log('You just became an adult :D (loose)');

// const favorite = Number(prompt("What's your favourite number?"));
// console.log(favorite);
// console.log(typeof favorite);

// if (favorite === 23) { 
//   console.log('Cool! 23 is an amzaing number!')
// } else if (favorite === 7) {
//   console.log('7 is also a cool number')
// } else if (favorite === 9) {
//   console.log('9 is also a cool number')
// } else {
//   console.log('Number is not 23 or 7 or 9')
// }

// if (favorite !== 23) console.log('Why not 23?');


const numNeighbours = Number(prompt("How many neighbour countries does your country have?"));

if(numNeighbours === 1){
    console.log("Only 1 border!");    // Loose equality
}

else if(numNeighbours > 1){
    console.log("More than 1 border");
}

else{
    console.log("No borders");
}