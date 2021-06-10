
/* FOR EACH 
 * This function takes an array of integer and a funcion to print out as arguments
 * Then prints all the elements of the array
 */
function forEach(array, operation){
    for(let i = 0; i < array.length; i++){
        operation(i);
    }
};

forEach([11, 22, 33, 44, 55], console.log);

// MAP //
//Array.prototype.myMap = function() {
function myMap(array){
    

};

/* FILTER 
 * This function takes an integer array as an arguement
 * It then returns even numbers
 */
function myFilter(array){
    return array.filter(element => (element % 2 === 0));    
};

console.log(myFilter([11, 22, 33, 44, 55]));

// SOME //
Array.prototype.mySome = function() {

};

// EVERY //
Array.prototype.myEvery = function() {

};

// REDUCE //
Array.prototype.myReduce = function() {

};

// INCLUDES //
Array.prototype.myIncludes = function() {

};

// INDEXOF //
Array.prototype.myIndexOf = function() {

};

// PUSH //
Array.prototype.myPush = function() {

};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function() {

};

// KEYS //
Object.grabKeys = function() {

};

// VALUES //
Object.grabValues = function() {

};