// const person = {
//     firstName:'Jason',
//     lastName: 'Wechsler',
//     clothingTop: 'Red Shirt',
//     marriedTo: '',
//     assets:1200000,
//     liabilities:415000,
   
//     // const netWorth = (assets, liabilities) => 
//     // {
//     //     return assets-liabilities
//     // }
//     netWorth: function(){
//        return this.assets - this.liabilities
//     }

// }

// const person2 = {
//     firstName:'Kelsey',
//     lastName: 'Volkert',
//     clothingTop: 'Blue Corset',
//     marriedTo: person,
//     assets:1200000,
//     liabilities:450000,
   
//     // const netWorth = (assets, liabilities) => 
//     // {
//     //     return assets-liabilities
//     // }
//     netWorth: function(){
//         return this.assets - this.liabilities
//     }
// }

//person.marriedTo = person2

// console.log('Dot Notation -     First Name: '+ person.firstName + ' Last Name: ' + person.lastName + ' Shirt Color: ' + person.shirt)
// console.log('Bracket Notation - First Name: '+ person['firstName'] + ' Last Name: ' + person['lastName'] + ' Shirt Color: ' + person['shirt'])

//person2.phone = '7755551212'
//person['phone'] = '7025551212'

// console.log(person.phone)
// console.log(person)
// console.log(person2)

const makeAnIntroduction = (aPerson) => {

    console.log('Hi my name is ' + aPerson.firstName +' ' + aPerson.lastName )
    if(aPerson.clothingTop !='') {
        console.log('I am wearing a ' + aPerson.clothingTop )
    } else {
        console.log('I am topless')
    }

    if (aPerson.marriedTo.length !=0){

        //need to add a loop through the array to support polygamy or something
        console.log('I am married to ' + aPerson.marriedTo[0].firstName +' ' +
            aPerson.marriedTo.lastName)  
       
        if(aPerson.marriedTo.clothingTop != '')
        {
            console.log('My spouse is wearing a ' + aPerson.marriedTo[0].clothingTop )
        }
    }

    if (! isNaN(aPerson.netWorth()) )
    {
        console.log('My Networth is $' + aPerson.netWorth())    
    }
    console.log('');
    
}

const makeACustomIntroduction = (aPerson) => {

    makeAnIntroduction(aPerson)
}

const makeACustomPerson = (aFirstName, aLastName, aClothingTop, assets, liabilities, phone) => {
    const customPerson = {
        firstName: aFirstName,
        lastName: aLastName,
        clothingTop: aClothingTop,
        // randomally to see if I could do it, support polyamorous marriages
        marriedTo:[],
        assets:assets,
        phone:phone,

        liabilities:liabilities,
        netWorth: function(){
            return this.assets - this.liabilities
        }
     

    }
    return customPerson;

}

const getMarried = (aPerson, anotherPerson) => {
    aPerson.marriedTo.push(anotherPerson)
    anotherPerson.marriedTo.push(aPerson);

    totalAssets = aPerson.assets + anotherPerson.assets
    totalLiabilities = aPerson.liabilities + anotherPerson.liabilities

    aPerson.assets = totalAssets ;
    aPerson.liabilities = totalLiabilities;
    anotherPerson.assets = totalAssets ;
    anotherPerson.liabilities = totalLiabilities;
}
    

jason = makeACustomPerson('Jason', 'Wechsler', 'T-Shirt', 750000, 20000,'555-555-1212')
kelsey = makeACustomPerson('Kelsey', 'Volkert', 'Blue Corset', 250000, 20000,'555-555-1212')

getMarried(jason,kelsey);

makeAnIntroduction(jason);
makeAnIntroduction(kelsey);




janet = makeACustomPerson('Janet', 'Sanderson', 'Black Dress', 10000, 20000,'555-555-1212')
bob = makeACustomPerson('Bob', 'Sanderson', 'Teal Buttom Up', 20000, 40000,'555-555-1313')

getMarried(janet,bob);

makeACustomIntroduction(janet);
makeACustomIntroduction(bob);