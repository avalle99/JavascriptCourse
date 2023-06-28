function calcTip(bills){

    const tips = bills.map(bill => {
        return (bill>=50 && bill <= 300) ? (bill*0.15) : (bill*0.20);
    });

    return tips;
}


const bills = [125,555,44];
const tips = calcTip(bills)
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

console.log(tips);
console.log(total);