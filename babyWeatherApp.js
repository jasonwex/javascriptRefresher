//Baby weather app


let isRaining = prompt('Is it raining? (Y/N)');

if ( isRaining == 'y' ||  isRaining == 'Y' ||  isRaining == 'n' ||  isRaining == 'N')
{
    if(isRaining == 'y' || isRaining =='Y')
        {
            console.log("grab your umbrella")
        } else {
            console.log("Wear your Sunglasses")
        }
} else {
   console.error('invalid input" "' + isRaining+'" ')
    // isRaining = prompt('Is it raining? (Y/N)');
}