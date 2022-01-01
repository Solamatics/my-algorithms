//sum between a range of numbers
function sumAll (arr) {
    let min = Math.min(arr[0], arr[1]);
    let max = Math.max(arr[0], arr[1]);
    let sumOfNumbers = 0;
    for(let i = min; i <= max; i++) {
        sumOfNumbers += i;
    }
    return sumOfNumbers;
}

console.log(sumAll[1,4]);

//filter an array return only member(s) of the array that do not have
//a copy in the second array.

function diffArray(arr1, arr2) {
    const newArray = [];

    function filterArray(firstArray, secondArray) {
        for(let i = 0; i < firstArray.length; i++) {
            if(secondArray.indexOf(firstArray[i]) === -1) {
                newArray.push(filterArray[i])
            }
        }
    }

    filterArray(arr1, arr2);
    filterArray(arr1, arr2);

    return newArray;
}

//seek and destroy
function destroyer(arr) {
    let valsToRemove = Object.values(arguments).slice(1);
    
}