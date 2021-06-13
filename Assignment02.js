
/* FOR EACH 
 * This function takes an array of integer and a funcion to print out as arguments
 * Then prints all the elements of the array
 */
let forEach = function(array, operation){
    for(let i = 0; i < array.length; i++){
        operation(i);
    }
};
forEach([11, 22, 33, 44, 55], console.log);

// MAP //
let square = function(number){
    return number * number;
};
let myMap = function(array, callBack){
    let newArray = [];
    for(const element of array){
        newArray.push(callBack(element));
    }
    return newArray;
};
console.log(myMap([11,22, 33, 44, 55, 66], square));

/* FILTER 
 * This function takes an integer array as an arguement
 * It then returns even numbers
 */
let even = function(number){
    return number % 2 == 0 ? 1 : 0;
};
let myFilter = function(array, even){
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        if(even(array[i])){
            newArray.push(array[i]);
        }
    }
    return newArray;   
};

console.log(myFilter([11, 22, 33, 44, 55]));

// SOME //
// Array.prototype.mySome = function() {
let  = function(number){

}
let mySome = function(array, prime){
    let primes = [];
    for(let i = 0; i < array.length; i++){
        if(prime(array[i])){
            primes.push(array[i]);
        }
    }
    return primes;
};

// EVERY //
// Thiss function checks the numbers in the argument array
// If one of the numbers in the array is negative, the function return false.
let checkNumbers = function(number){
    return number >= 0 ? 1 : 0;
};
let myEvery = function(array, positiveNumbers){
    for(let i = 0; i < array.length; i++){
        if(!checkNumbers(array[i])){
            return false;
        }
    }
    return true;
};

// REDUCE //
//Array.prototype.myReduce = function() {
let reduce = function(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
};

// INCLUDES //
// if target is matched with an element in array,
// return true, fasle otherwise.
let myIncludes = function(array, target){
    for(let i = 0; i < array.length; i++){
        if(target === array[i]){
            return true;
        }
    }
    return false;
};

// INDEXOF //
// if target is matched an element of the array,
// return the index, return -1 otherwise;
let myIndexOf = function(array, target){
    for(let i = 0; i < array.length; i++){
        if(target === array[i]){
            return i;
        }
    }
    return -1;
};

// PUSH //
//Array.prototype.myPush = function() {
let myPush = function(array, elementToAdd){
    array.length = array.length + 1;
    array[array.length] = anElement;
};

// LASTINDEXOF //
// Return the last index of the array which is matched with the target.
let myLastIndexOf = function(array, target){
    let lastIndex = -1;
    for(let i = 0; i < array.length; i++){
        if(target === array[i]){
            lastIndex = i;
        }
    }
    return lastIndex;
};

// KEYS //
Object.grabKeys = function() {

};

// VALUES //
Object.grabValues = function() {

};