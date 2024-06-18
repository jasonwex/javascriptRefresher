const letterCounter = (phrase) => {

    counter = 0 
    //return phrase.length
    // for (letter in phrase)
    //     {
    //         if (phrase.slice(letter-1, letter) != ' ')
    //             {
    //                 counter ++
    //             }
    //     }
    for (letter of phrase)
        {
           
            if (letter != ' ')
                {
                    counter ++
                } else {
                   phrase = String(phrase).replace(' ','-')
                   counter ++
                }
        }
        return counter
}

const countTheLetters = (phrase) => {
    result = 0
    for (const letter in phrase){
        console.log(Number(letter)+1)
        result = Number(letter)+1
    }

    return {result}
}

const sumOfArrays =(numbers) => {
    let result = 0;

    for (const number of numbers){
        result += number
    }
    return {total:result}

}

let  theNumbers = [1,2,3,4,5,6]
let  theOtherNumbers = [2,12,5,16,10]
let arrayOfArrays =[theNumbers,theOtherNumbers];
randomString = "this is a test    "
anotherRandomString = "this is a test     or is it"

console.log(letterCounter(randomString))
console.log(countTheLetters(anotherRandomString))
console.log(randomString)

console.log(sumOfArrays(theNumbers))
console.log(sumOfArrays(theOtherNumbers))
console.log(sumOfArrays(arrayOfArrays))