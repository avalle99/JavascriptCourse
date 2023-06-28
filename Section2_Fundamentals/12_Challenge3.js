const dolphinsAvg = (96 + 108 + 89) / 3;
const koalasAvg = (88 + 91 + 110) / 3;


if(dolphinsAvg > koalasAvg){
    console.log("Dolphins are the winners");
}

else if(koalasAvg>dolphinsAvg){
   console.log("Koalas are the winners"); 
}

else{
    console.log("Game ends in a draw");
}

////////Bonus 1/////////
const dolphinsAvg2 = (97 + 112 + 101) / 3;
const koalasAvg2 = (109 + 95 + 123) / 3;



if(dolphinsAvg2>koalasAvg2 && dolphinsAvg2 >= 100){
    console.log("Dolphins are the winners [Bonus 1]");
}

else if(dolphinsAvg2<koalasAvg2 && koalasAvg2 >= 100){
    console.log("Koalas are the winners [Bonus 1]");
}


console.log(dolphinsAvg2, koalasAvg2)


////////Bonus 2/////////
const dolphinsAvg3 = (97 + 112 + 101) / 3;
const koalasAvg3 = (109 + 95 + 106) / 3;



if(dolphinsAvg3>koalasAvg3 && dolphinsAvg3 >= 100){
    console.log("Dolphins are the winners [Bonus 1]");
}

else if(dolphinsAvg3<koalasAvg3 && koalasAvg3 >= 100){
    console.log("Koalas are the winners [Bonus 1]");
}

else if(dolphinsAvg3===koalasAvg3 && dolphinsAvg3 >= 100 && koalasAvg3 >=100){
    console.log("Game ends in a draw")
}


console.log(dolphinsAvg3, koalasAvg3)
