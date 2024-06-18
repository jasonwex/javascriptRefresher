

let groceries = ['apple', 'pear', 'steak'];
groceries.push('bread','cheese', 'flour', 'butter');
groceries.push('hamburger','hotdog', 'salad', 'blueberries');

groceries.push('bread','cheese', 'flour', 'butter');
groceries.push('hamburger','hotdog', 'salad', 'blueberries');



// for (let i = 0;  i < groceries.length; i++) {
//     console.log(groceries[i])
// }

// for (const food of groceries)
// {
//     console.log(food);   
//     //console.log('');

// }

const removeDuplicatesFromArray = (anArray) => {

}

const doubleAnArray = (aNumberArray) => {
   
    doubledArray = [];
    for (const aNumber of aNumberArray){
        doubledArray.push(aNumber*2);

    }
    return doubledArray;
}

const squareAnArray = (aNumberArray) => {
   
    doubledArray = [];
    for (const aNumber of aNumberArray){
        doubledArray.push(aNumber*aNumber);

    }
    return doubledArray;
}

let  theNumbers = [1,2,3,4,5,6]
let  theOtherNumbers = [2,12,5,16,10]
let doubleTheNumbers = doubleAnArray(theNumbers);

// for ( aNumber of theNumbers)
//     {
        
//         aNumber = 2*aNumber;
//         console.log(aNumber);   

//         doubleTheNumbers.push(aNumber);
//         //console.log('');
    
//     }

    console.log(doubleTheNumbers)
    console.log(squareAnArray(theOtherNumbers))