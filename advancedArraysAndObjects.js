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

const maxInArray = (numbers) => {
    let result = numbers[0];

    for (const number of numbers){
        if (result < number) {
            result = number;
        }
    }

    return {HighestNumberInArray:result}
}

const frequencyInArray = (anArray, searchValue) => {

    let count = 0;

    for (const value of anArray){
        if (value == searchValue) {
            count ++;
        }
    }
    return {Frequencyof: count}


}


const frequencyInString = (string) => {

    results = [];
    for (const letter of string){
        let countOfCharacter = String(string).split(letter).length -1 ;
        if(!doesItExistIntheArrary(letter, results)){
            results.push(newLetterCountObject(letter, countOfCharacter))
        }
    }
    return results;
}

const doesItExistIntheArrary = (letter, anArray) =>{

    let doesItExist = false;
    if ( anArray.length > 0 ){
        for( const letterCounter of anArray){
            if ( letterCounter.letter == letter){
                doesItExist = true;
            }

        }
    }
    return doesItExist;
}


const newLetterCountObject = (letter, increaseCountBy) => {

    
    const letterCounter = {

        letter:letter,
        count:increaseCountBy
    }

    return letterCounter;
}

const frequencyInString2 = (string) => {

    //make frequency object
    let frequency = {};

     for (const letter of string){
       
         if (letter in frequency)
         { 
             frequency[letter] += 1  
             
         } else {
             frequency [letter] = 1 
         }
     }
     
     return frequency;
}

const wordFrequency1 = (string) => {

    let frequency = {};

    let theWord = ''
     for (const letter of string){
      
      
        if (letter == ' ')
        {
            if (theWord in frequency)
            {
                frequency[theWord] ++;
            } else {
                frequency[theWord] = 1;
            }
            theWord = '';
        

        } else {
            theWord += letter;

        }
    }

    
    if (theWord in frequency)
    {
        frequency[theWord] ++;
    } else {
        frequency[theWord] = 1;
    }

    return frequency;
}

//this time create a word array like the tutorial
const wordFrequency2 = (string) => {

//  let wordArray = buildWordArray(string);
    let wordArray = string.split(' ');
    let frequency = {};


    for (word of wordArray)
    {
        if (word in frequency)
        {
            frequency[word] ++;
        } else {
            frequency[word] = 1;
        }
        
    }
    return frequency;
}

//while this works, and was shown in the tutorial, it is by chance. It would be a 
//bad idea to just reuse a function like that because it was not actually meant to 
// do this with an array. 
// that said, it might make sense to "rebrand" the function to do this more explicitly
const wordFrequency3 = (string) => {

    //  let wordArray = buildWordArray(string);
        let wordArray = string.split(' ');
       
        return frequencyInString2(wordArray);
    
    }
//implimented my own split by ' ' because I didn't know that split did that lol
const buildWordArray = (string) => {
    
    let wordArray = [];
    theWord = '';

    for (const letter of string) {
      
        if (letter == ' ')
        {
            wordArray.push(theWord)
            theWord = '';

        } else {
            theWord += letter;
        }
    }
    wordArray.push(theWord)
    theWord = '';

    return wordArray;
}

let  theNumbers = [1,2,3,4,5,6, 7.9,2,3,4,5,6, 7.9,2,3,4,5,6, 7.9,2,3,4,5,6, 7.9,2,3,4,5,6, 7.9,2,3,4,5,6, 7.9,2,3,4,5,6, 7.9,2,3,4,5,6, 7.9,2,3,4,5,6, 7.9,2,3,4,5,6, 7.9]
let  theOtherNumbers = [2,12,5,16,10,12,5,16,10,12,5,16,10,12,5,16,10,12,5,16,10,12,5,16,10,12,5,16,10,12,5,16,10,12,5,16,10,12,5,16,10,12,5,16,10,12,5,16,10,12,5,16,10]
let theStrings = ['testtesttesttest', 'test', 'not a test', 'pew pew','test', 'test', 'not a test', 'pew pew','test', 'test', 'not a test', 'pew pew','test', 'test', 'not a test', 'pew pew']
let aString = 'aaa bbb ccc dd eeeee f ggggggggg h zzzz aa bbbb cccc aaa aaa aaa bbbbbbbbb bbb';
let bString = ' test test test a jason jason two two three three three four four four four'
// let arrayOfArrays =[theNumbers,theOtherNumbers];
// randomString = "this is a test    "
// anotherRandomString = "this is a test     or is it"

// console.log(letterCounter(randomString))
// console.log(countTheLetters(anotherRandomString))
// console.log(randomString)

// console.log(sumOfArrays(theNumbers))
// console.log(sumOfArrays(theOtherNumbers))

// console.log(maxInArray(theNumbers))
// console.log(maxInArray(theOtherNumbers))

// console.log(frequencyInArray(theNumbers,1))
// console.log(frequencyInArray(theOtherNumbers, 12))
// console.log(frequencyInString(aString) )
// console.log(frequencyInString2(aString) )
//console.log(aWordFrequency(aString) )
console.log(wordFrequency1(bString) )
console.log(wordFrequency2(bString) )
console.log(wordFrequency3(bString) )