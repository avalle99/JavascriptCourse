const bills = [22,295,176,440,37,105,10,1100,86,52];
const tips = [];
const total = [];

//(bill>=50 && bill <= 300) ? (bill*0.15) : (bill*0.20);


function calcTip(bills){

    for(let i = 0; i < bills.length; i++){
        const tip = (bills[i]>=50 && bills[i] <= 300) ? (bills[i]*0.15) : (bills[i]*0.20);
        tips.push(tip)

        const sum = bills[i] + tip;
        total.push(sum)
    }
}


function calcAvg(arr){
   let sum = 0;
   
   for(i = 0; i < arr.length; i++){
        sum += arr[i];
   }

   console.log(sum);

   return sum / arr.length;
}


calcTip(bills)
console.log(tips)
console.log(total)


const avg = calcAvg(bills)
console.log(avg)
