
//this function calculates the tip amount
// billtotal: how much you spent on the meal
// tipPercentage - what percentage are you tipping? TODO: Add a message calling out tippers for tipping less than 15%
// returns -1 if a non-numeric value found
const calculateTipAmount = (billTotal, tipPercentage) => {

        if ( notANumberError(billTotal) && notANumberError(tipPercentage) ) 
        {
            return Math.floor((billTotal * tipPercentage));
        } else {
            console.error("unexpected value found - not a number: Total of meal is type "+ (typeof billTotal) + " and tip rate is of type " + (typeof tipPercentage));
            return -1;
        }
    
}

// function notANumberError(maybeNumber)
// {
//     if ( isNaN(maybeNumber) )
//     {
//         console.error(maybeNumber + ' is not a number');
//         return false;
//     } else {
//         return true;
//     }

// }
const notANumberError = (maybeNumber) => {
    if ( isNaN(maybeNumber) )
    {
        console.error(maybeNumber + ' is not a number');
        return false;
    } else {
        return true;
    }

}

const calculateTotal = (billTotal, tipTotal) => {
    return billTotal+tipTotal;
}

const promptForTipInfo = () => {
    let foodCost = Number(prompt('How much does the food cost?'));
    let tipPercentage = Number(prompt('tip %')) / 100;
    let tipAmount =  calculateTipAmount(foodCost, tipPercentage);

    if (tipAmount != -1){

        console.log('A '+(tipPercentage*100) + '% tip would be ' + tipAmount);

        let totalMealCost = calculateTotal(foodCost, tipAmount);
        console.log('Total meal cost would be ' + totalMealCost);
    } else {
        console.log("A non-numeric value was found, please try again")
        promptForTipInfo();
    }
}

promptForTipInfo();

 