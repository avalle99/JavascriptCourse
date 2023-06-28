const BMICalc = (mass, weight) =>{
    return (mass/weight*weight);
}

const markWeight = 95;
const markHeight = 1.88;
const johnWeight = 85;
const johnHeight =1.76;


markBMI = BMICalc(markWeight, markHeight);
johnBMI = BMICalc(johnWeight, johnHeight);


const markHigherBMI = markBMI > johnBMI;


console.log(markBMI, johnBMI, markHigherBMI);