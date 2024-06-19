// Test you code by forking this repl: 
// 👉 


// Write a function that takes in an array and sort the numbers inside from least to greatest
// BONUS sort the array without using .sort()

function sortArray (array) {
  return array.sort();
}

const manualQuickSortArray = (array, low, high) => {

  if (low < high) {

    let partitionIndex = manualQuickSortArrayPartition (array, low, high)
    
    //sort both sides of the partition
    manualQuickSortArray(array, low, partitionIndex - 1);
    manualQuickSortArray(array, partitionIndex + 1, high);

  }


}

const manualQuickSortArrayPartition = (array, low, high)=> {

  let pivot = array[high];

  let lowIndexShift = low - 1;

  for (let counter = low; counter <= high -1; counter++){
    if (array[counter] < pivot){

      lowIndexShift ++;
      //swap the positions
      [array[lowIndexShift] , array [counter]] = [array[counter] , array [lowIndexShift]] 
    }
  }

 [array[lowIndexShift + 1], array[high]] = [array[high], array[lowIndexShift + 1]]
 
 return lowIndexShift+1;
}




numberArray = [1,2,3,4,5,6,5,4,3,2,1,3];
arrayLength = numberArray.length; 
console.log(numberArray);
manualQuickSortArray(numberArray,0,arrayLength-1);
console.log(numberArray);


