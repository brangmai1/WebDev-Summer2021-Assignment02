
/**
 * Name : Brng Mai
 * Assignment : #2
 * Course : Practical Web Design, Summer 2021
 */

/* 
 * FOR EACH 
 * This function takes an array of integer and a funcion to print out as arguments
 * Then prints all the elements of the array by callback function, named "operation".
 */
const forEach = function(array, operation){
    for(let i = 0; i < array.length; i++){
        operation(i);
    }
};

/*
 * MAP 
 * myMap function takes an array and call back function, named "callBack"
 * The function returns a new mapped array.
 */
let square = (number) => number * number;
const myMap = function(array, callBack){
    let newArray = [];
    for(const element of array){
        newArray.push(callBack(element));
    }
    return newArray;
};

/* FILTER 
 * This function takes an integer array as an arguement
 * It then returns even numbers
 */
let evenNumber = (number) => number % 2 == 0 ? 1 : 0;
const myFilter = function(array, evenNumber){
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        if(evenNumber(array[i])){
            newArray.push(array[i]);
        }
    }
    return newArray;   
};

/* 
 * SOME 
 * mySome function takes a string array and a testing function
 * The functions take word with three characters, then return the new array with three character words 
 */
let  wordsWithThreeChars = (word) => word.length === 3 ? 1 : 0;
let mySome = function(array, wordsWithThreeChars){
    let shortWords = [];
    for(let i = 0; i < array.length; i++){
        if(prime(array[i])){
            shortWords.push(array[i]);
        }
    }
    return shortWords;
};

/* 
 * EVERY 
 * Thiss function checks the numbers in the argument array
 * If one of the numbers in the array is negative, the function return false. 
 */
let checkNumbers = (number) => number >= 0 ? 1 : 0;
let myEvery = function(array, positiveNumbers){
    for(let i = 0; i < array.length; i++){
        if(!checkNumbers(array[i])){
            return false;
        }
    }
    return true;
};

/*
 * REDUCE 
 * reduce the element of the array: passed an argument
 */
let reduce = function(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
};

/* 
 * INCLUDES 
 * if target is matched with an element in array,
 * return true, fasle otherwise. 
 */
const myIncludes = function(array, target){
    for(let i = 0; i < array.length; i++){
        if(target === array[i]){
            return true;
        }
    }
    return false;
};

/* 
 * INDEXOF 
 * if target is matched an element of the array,
 * return the index, return -1 otherwise; 
 */
const myIndexOf = function(array, target){
    for(let i = 0; i < array.length; i++){
        if(target === array[i]){
            return i;
        }
    }
    return -1;
};

/* 
 * PUSH 
 * myPush function takes an array and an element as arguments
 * The element is added to the array 
 */
let myPush = function(array, elementToAdd){
    array.length = array.length + 1;
    array[array.length - 1] = elementToAdd;
};

/* 
 * LASTINDEXOF //
 * Return the last index of the array which is matched with the target. 
 */
const myLastIndexOf = function(array, target){
    let lastIndex = -1;
    for(let i = 0; i < array.length; i++){
        if(target === array[i]){
            lastIndex = i;
        }
    }
    return lastIndex;
};

/* 
 * KEYS 
 * Get all the keys of object, then return the keys of the object. 
 * */
const grabKeys = function(object){
    let keys = [];
    for(let i = 0; i < object.length; i++){
        keys.push(i);
    }
    return keys;
};

/* 
 * VALUES
 * Get all the values of object, then return the values of the object. 
 */
const grabValues = function(object){
    let values = [];
    for(let i = 0; i < object.length; i++){
        values.push(object[i]);
    }
    return values;
};