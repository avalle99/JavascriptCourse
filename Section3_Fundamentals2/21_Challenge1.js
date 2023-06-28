"use strict"

const averageScore = (score1, score2, score3) =>{
    return (score1 + score2 + score3) / 3;
}


const avgDolphins = averageScore(85,54,41);
const avgKoalas = averageScore(23,34,27);

console.log(avgDolphins, avgKoalas);



const checkWinner = function(avgDolphins, avgKoalas){
    if(avgDolphins >= avgKoalas*2){
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    }
    else if (avgKoalas >= avgDolphins*2){
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    }
    else{
        console.log("No one won :(");
    }
}


checkWinner(avgDolphins, avgKoalas);