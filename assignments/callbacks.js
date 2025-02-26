// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });
  
  */
 // getLength passes the length of the array into the callback.
 

  // function measure(arr){
  //     return arr.length;
  //   }

  // function getLength(array, cb) {
  //   return cb(array);
  // }

  // console.log(getLength(items,measure));


// last passes the last item of the array into the callback.


  // function lastItem(arr){
  //   return arr[arr.length -1];
  // };
  
  // function last(arr, cb) {
  //   return cb(arr);
  // }

  // console.log( last(items,lastItem) );


// sumNums adds two numbers (x, y) and passes the result to the callback.


    // function add(num1,num2){
    //   return num1 + num2;
    // }

    // function sumNums(x, y, cb) {
    //   return cb(x,y)
    // }

    // console.log(sumNums(2,5,add))


// multiplyNums multiplies two numbers and passes the result to the callback.


    // function multiply(num1,num2){
    //   return num1 * num2;
    // }

    // function multiplyNums(x, y, cb) {
    //   return cb(x,y)
    // }

    // console.log(multiplyNums(3,5,multiply))


// contains checks if an item is present inside of the given array/list.
// Pass true to the callback if it is, otherwise pass false.

/*const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];*/


// function itemPresent(item, list){

// console.log(list);
//   if( item === list ){
//     return true;
//   } else {
//     return false;
//   }
// }

// function contains(item, list, cb) {
//   return cb(item,list);
// }

// console.log(contains('Pencil',items,itemPresent));

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
