const markData = {
    firstName: "Mark",
    lastName: "Miller",
    weight: 78,
    height: 1.69,
    
    calcBMI: function(){
        this.bmi = (this.weight) / (this.height**2);
        return this.bmi;
    }
}

const johnData = {
    firstName: "John",
    lastName: "Smith",
    weight: 92,
    height: 1.95,
    calcBMI: function(){
        this.bmi = (this.weight) / (this.height**2);
        return this.bmi;
    }
}


markData.calcBMI();
johnData.calcBMI();

if(markData.bmi > johnData.bmi){
    console.log(`${markData.firstName}'s BMI (${markData.bmi}) is higher than ${johnData.firstName}'s (${johnData.bmi})`)
}
else if (johnData.bmi > markData.bmi){
    console.log(`${johnData.firstName}'s BMI (${johnData.bmi}) is higher than ${markData.firstName}'s (${markData.bmi})`)
}
