// Remember to relax and ask for help when you need it (only from staff)
// YOU CAN ONLY USE MDN AS A RESOURCE for JavaScript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript
// you can use W3school for HTML-CSS
// for the jquery you can only use jquery documentaion.
// https://api.jquery.com
// NOTE: you are accountable for your styling, so make sure your styling is good.
// ANOTHER NOTE:leave comments about your intent or pseudo-code describing your plan.

// Use the following helper functions in your solution

function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function (element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

function map(array, func) {
  var acc = [];
  each(array, function (element, i) {
    acc.push(func(element, i));
  });
  return acc;
}

function reduce(array, f, acc) {
  if (acc === undefined) {
    acc = array[0];
    array = array.slice(1);
  }
  each(array, function (element, i) {
    acc = f(acc, element, i);
  });
  return acc;
}

//=============================================================================
/*                                  Q1                                    */
//=============================================================================
// Write a function called addID that takes an object and an id code",
//and returns a new object with an added `id` property to it. The `id`'s value will be the id code.
// Things to consider:
// * If no id code is given, assign n/n as the property's value.
// * If the id code is not a number, returns Invalid id.
// addID({name : "Barbra Karst"},4567); // {name :"Barbra Karst", id: 4567}
// addID({a : 1}); // {a : 1, id: 'n/n'}
// addID({c : 2}, 'ABC'); // "Invalid code"

// TODO: your code here

function addID(object, id ){
  if(id===undefined){
    id= "n/n";
  }

  else if ( object.id = id){
  return object
} 
else {
    return "Invalid code"
  }

}

//  function addID(obj,num){
//   if(typeof(num) === "number"){
//     obj.id = num;
//     return obj;
//   }
//   if (num===undefined){
//     obj.id='n/n';
//     return obj;
//   }
//   else {
//     return "Invalid code"
//   }
// }



//=============================================================================
/*                                  Q2                                    */
//=============================================================================
// Write a function called allHaveLastNames that takes an array of names (strings) as input,
//and returns true if all names in the array have a last name, and false if not.
//solve it using the most appropriate helper functions(reduce,each,map,filter).
//var Folks = ["Sierra Heimbach", "Angelica Storms",   "Lampton",  "Hampshire"];
//var FollkWithLast =  ["Sierra Heimbach", "Angelica Storms", "Doretta Linen"];
// AllHaveLastNames(Folks); //false
// AllHaveLastNames(FollkWithLast); //true
// TODO: your code here

var Folks = ["Sierra Heimbach", "Angelica Storms",   "Lampton",  "Hampshire"];
var FollkWithLast =  ["Sierra Heimbach", "Angelica Storms", "Doretta Linen"];

function AllHaveLastNames(array){
  return reduce(array,function(result,str,i){
        return (str.split(" ").length === 2 && result)
       
    },true);
}
​
//=============================================================================
/*                                  Q3                                        */
//=============================================================================
// Write a function called coinFlip that randomly returns either "heads" or "tails".
// Each outcome should have an equal chance of happening.
//Hint: Math.random()
// TODO: your code here

function  coinFlip (){
  if(Math.round( Math.random() ) ){
    return "tails";
  }
  else {
    return "heads";
  }
}


//=============================================================================
/*                              Q4                                           */
//=============================================================================
// Write a function called assignStudnetID that takes an array of students’ names, a starting number,
//and an optional 3rd argument. This function should return a new array of objects,
//each with a `name` property (students’ name), and an `id` property.
// Each student should get an ID code starting from `11000`,and increment by the optional 3rd parameter.

// Things to consider:
//  If a 3rd argument is not provided, increment by 1 for each student.
// var students = ["Aleen Y. Atkins", "Alvaro L. Angelos", "Denese Dossett", "Douglas Denney"];

// var firstArray = assignStudnetID(students, 11000);
// var secondArray = assignStudnetID(students, 11000, 12);

// firstArray[0]; // {name: 'Aleen Y. Atkins', id: 11000};
// firstArray[1]; // {name: 'Alvaro L. Angelos', id: 11001};

// secondArray[0]; // {name: 'Aleen Y. Atkins', id: 11000};
// secondArray[1]; // {name: 'Alvaro L. Angelos', id: 11012};
// secondArray[2]; // {name: 'Denese Dossett', id: 11024};

// TODO: your code here
var students = ["Aleen Y. Atkins", "Alvaro L. Angelos", "Denese Dossett", "Douglas Denney"];
function  assignStudnetID(array,startingnum, i){
  var x = i || 1;
  startingnum = startingnum - x;
  return map(array, function(element, i){
    startingnum= startingnum + x;
    return{
      name: element,
       id : startingnum
    };;
  })

}

//=============================================================================
/*                                  Q5                                         */
//=============================================================================
//Write a function called lastNElements that takes two Parameters as an input,  an array of numbers  and a number n,
// and returns a new array with the last n elements only.
//solve it using one of the most appropriate helperthe helpers functions(each,map,filter).
// lastNElements( [1,2,3,4],2 ) ==> [3,4]
// lastNElements( [9,2,3,4,6],1) ==> [6]
// lastNElements( [], 3 ) ==> []
// lastNElements( [5,6,8,9,12], 9 ) ==> [5,6,8,9,12]

function lastNElements(array, n) {
    var result = []; 

    each(array,function(element,i){
       if(n >= array.length){
        result = array;
       } 
       else {
        result = array.slice((array.length-n))
       }
    })
    return result;

//=============================================================================
/*                                  Q6                                        */
//=============================================================================
//Write a function called replaceDigit that takes a string as input and returns new string
//after replace first digit in the string (should contains at least digit) with & character.
//replaceDigit("abc1dabc") ==> abc&dabc
//replaceDigit("p3ython") ==> p&ython


  function  replaceDigit(string){
  var x = string.split('');
   for(var i = 0; i < x.length  ; i++ ){
    if(parseInt(x[i])){
      x[i] = "&";
      break;
    }
   
  };
   return x.join('')
}


//=============================================================================
/*                                  Q7                                       */
//=============================================================================
//Using recursion, write a function called arraySum that takes an array of numbers as parameter
// and returns the sum of all numbers in the array except the last one.
// arraySum([1, 2, 3, 4, 5, 6]) ==> 15
// arraySum([1, 2, 4]) ==>   3

// TODO: your code here

function arraySum(array){
  var i=0;
  var sum=0;
  function SUM(){
    if(i===array.length-1){
      return 0;
    }
    sum+= array[i]
        i++;
    SUM();
        return sum;
  }
  return SUM();
}

// function arraySum(array,i){
//     var sum = 0;
//     function inner(array,i){
//         if(i === array.length - 1){
//             return sum;
//         } else{
//             sum = sum + array[i];
//             return inner(array,i+1)
//         }
//     }
//     inner(array,0);
//     return sum;
// }
//=============================================================================
/*                                  Q8                                   */
//=============================================================================
//Depending on data modeling concept that you have learned:
// create a factory function called makeProfile that return object  has the following properties:
//  "name" with a string value
//  "age" with a number value
//  "knowsJavascript" with a boolean value
//  "pets" with an array value

function makeProfile(name,age,knowsJavascript,pets){
   var provile ={
    name: name,
    age: age,
    knowsJavascript: knowsJavascript,
    pets: pets
  }
  return provile; 
}

// name: 'salma',
//     age: 20,
//     knowsJavascript: true,
//     pets: ['cat','bird']
 

// write function displayProfile that can be used to display one profile.


function displayProfile(name,age,knowsJavascript,pets){
  return 'my name is: ' + profile.name +  "i'm " + profile.age + " years old, yes it's " + profile.knowsJavascript + "that i know JavaScript , and i have " + pets.knowsJavascript + 'as pets.'
}



// write function displayProfilePets that can be used to display all the elements inside pets array.
var myProfile =  {
name : "Sahar",
age : 30,
knowsJavascript :true,
pets : ["Pandacat", "SashaGoat"]
};

function displayProfilePets(object){
  return object.pets
}

// displayProfile (myProfile) ===>   name : "Sahar"
//                                   age : 30
//                                   knowsJavascript :true
//                                   pets : ["Pandacat"]

//  displayProfilePets (myProfile)  ===> Pandacat,SashaGoat

function makeProfile(name, age, knowsJavascript, pets){
  return{name: name,
         age: age,
         knowsJavascript: knowsJavascript,
         pets: pets
        }
}

function displayProfile(profile){
  return "name: " + profile.name + "\n" + "age: " + profile.age + "\n" + "knowsJavascript: " + profile.knowsJavascript + "\n" + "pets: [" + profile.pets + "]";
}
function displayProfilePets(profile){
  var display = "";
  if(profile.pets.length === 0)
    return display;

  else if(profile.pets.length === 1)
    return profile.pets[0];

  else if(profile.pets.length > 1){
    for(var i = 0; i < profile.pets.length - 1 ; i++){
      display +=  profile.pets[i] + ", ";
    }
    return display += profile.pets[profile.pets.length - 1]
  }
}




//=============================================================================
/*                                  Q9                                     */
//=============================================================================
/*
  Create a ReadingList class by using OOP concept, where:
  Your class should has:
  "read" for the number of books that finish reading
  "unRead" for the number of books that still not read
  "toRead" array for the books names that want to read in the future
  "currentRead" for the name of the book that is reading currently
  "readBooks" Array of the names of books that finish read
  "AddBook" function that:
  a- Accept the book name as parameter
  b- Add the new book to "toRead" array
  c- Increment the number of the unread books.
  "finishCurrentBook" function that:
  a- Add the "currentRead" to the "readBooks" array
  b- Increment the "read" books
  c- Change the "currentRead" to be the first book from "toRead" array
  d- Decrement the number of "unread" books
  */

// Now, to make sure that you are actually reading, make a comment below this and type: Yes I am

// Write your code here .....
function makeProfile(name,age,knowsJavascript,pets){
    return {
        name : name,
        age : age,
        knowsJavascript : knowsJavascript,
        pets: pets
    }
}
var profile1 = makeProfile("yasmeen",27,true,['cat','dog']);
​
function displayProfile(obj){
    return `name is:${obj.name}
    age : ${obj.age}
    KnowsJavaScript: ${obj.knowsJavascript}
    Pets you have: ${obj.pets}
    `
}
​
function displayProfilePets(obj){
    var result = [];
    for(var i = 0; i < obj.pets.length; i++){
        result.push(obj.pets[i]);
    }
   result = result.join(',')
    return result;
}
//=============================================================================
/*                                  Q10                                      */
//=============================================================================
//Using closures create makeSafe Function that accepts an initial integer value to specify the storage size limit
//makeSafe should contain addItem function that accepts two parameters the item and the itemSize as Strings
//itemSize should be either "big", "medium" and "small"
//big sized items will hold 3 slots in the storage
//medium sized items will hold 2 slots in the storage
//small sized items  will hold 1 slot in the storage
//return "Can't fit" if you try to add an item that exceeds the storage size limit
//when the safe is full return a string representing all the items that are in the safe
//Example:
//  var safe = makeSafe(5)
//  safe('watch','small')
//  safe('gold-bar','big')
//  safe('silver-bar','big') => "Can't fit"
//  safe('money','small') => "watch gold-bar money"

// Write your code here .....
function ReadingList() {
    var instance = {};
    instance.read = 0;
    instance.unread = 0;
    instance.toRead = [];
    instance.currentRead = undefined;
    instance.readBooks = [];
    instance.addBook = addBook;
    instance.finishCurrentBook = finishCurrentBook;
    return instance;
  }     
  
  var addBook = function(book) {
    if(this.currentRead === undefined){
      this.currentRead = book;
    } else {
    this.toRead.push(book);
    this.unread += 1
    } 
  }
  
  var finishCurrentBook = function() {
    this.readBooks.push(this.currentRead);
    console.log(this.readBooks)
    this.read +=1;
    this.currentRead = (this.toRead.shift());
    this.unread -= 1;
  }

//=============================================================================
/*                                  Q11                                        */
//=============================================================================

//DO NOT USE JQUERY
//1. Create a HTML file, add 3 text fields to it next to each other, 1 button below them, 1 headline below the button
// 2. Create a JS file and connect it to the HTML
// 3. Create a CSS file and link it to the HTML
// 4. Create a function in the JS file that takes a number from the first and the third text fields and takes (+, -, *, /)
//from the second text field, then it calculates the operation and changes the headline to the result.
// 5. The function should change the color of the headline to green if the result is smaller than 100,
//to blue if it’s equal to or larger than 100 and to red if the input in the first or the third text fields
//is not a number and if the second text field is not one of the 4 operations (wrong inputs)
// 6. Style the HTML elements in the CSS file as you see fit and center them in the webpage

//================================================================================
/*                              Q12                                             */
//================================================================================
//Using jQuery
//create HTML file
//create js file and link it to HTML file and add the jquery link also.

/*
    Put this HTML code in HTML file that you created 
    <button id="clickMe">Click me to hide the hidden spies!</button>
    <p class="secret">I am hidden SPY #1.</p>
    <p class="secret">I am hidden SPY #2.</p>
    <p class="secret">I am hidden SPY #2.</p>
    <p>I am <em>not</em> a hidden SPY.</p>
    <button id ="create"> Clear </button>
    <button id ="delete"> Clear </button>
    */

// Using jQuery write a function gets called when the user clicks the button clickMe.
// the paragraphs that start with the words "I am a hidden SPY" slide up.

//Using jQuery write a function that gets called when the user clicks create button.
//The function should create new paragraph with class secret.
//Using jQuery write a function that gets called when the user clicks delete button.
//The function should removes all the paragraphs.

//================================================================================
/*                              Q13                                             */
//================================================================================
// Theoretical questions.
// 1- In your own words,Why do we use Closures ?

// 2- In OOP, what does "this" refer to ?

// 3- What is jQuery?
// 4- what is the diffrence between Closure's methods and The OOP's methods?
// 5- What are variables?
// 6- 5-What  is the difference between == and === ?
//7- What’s the Higher-Order Function ?