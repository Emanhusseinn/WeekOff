//week2-day3

//EX9
var person = {
  firstName:'Leena',
  lastName: 'Atia'
}


function addFullNameProperty(object){
  if( (object.firstName !== undefined) && (object.lastName !== undefined)){
    object.fullName = object.firstName + " " + object.lastName;
  }
}

addFullNameProperty(person)

 console.log(person.fullName)

 //	EX10

 function addArrayProperty‌‌(obj,key,arr){
 	obj[key]= arr;
 }
 var myObject= {}
 var myArray= [1,3]
 console.log(myObject.myProperty)
 addArrayProperty‌‌(myObject, 'myProperty', myArray);
 console.log(myObject.myProperty) 


 //EX11
 function printAllProperties‌‌ (object){
 	for(var key in object)
 }

var person ={
	f:'leena',
	l: 'ata'
}
printAllProperties(person)

//ex12

// function removeNumbersLargerThan(num,obj){
// 	if((obj[key]=== typeof === 'number' ) < num){
// 		return 

// 	}
// }



function removeNumbersLargerThan(num , object){
	for(var key in obj){
		if (obj[key]>num){
			return delete obj[key];
		}
		
	}
	return obj;
}

var object = {
	a : 8,
	b : 2,
	c : 'montana'
}


//13

function removeAllEvenValues(obj){
		for(var key in obj){
		if (obj[key]%2===0){
			return delete obj[key];
		}
		
	}
	return obj;

}

var object = {
	a : 9,
	b : 2,
	c : 'montana'
}


//14
function removePropertiesNotEqualTo10(obj){
		for(var key in obj){
		if (obj[key]!==10){
			return delete obj[key];
		}
		
	}
	return obj;
}
var object = {
	a:10,
	b:2,
	c:'montana',
	d:10,
	e:'ohio',
	f:10
};

//15
function removeStringsLongerThan(n,object){
	for(var key in object){
		if(object[key].length>n){
			return delete object[key];
		}
	}
	return object;
}

var obj = {
	a : 'Texas',
	b : 2,
	c : 'Montana'
}

//16
function removeAllNumbers(object){
	for(var key in object){
		if(typeof object[key] === 'number'){
		 delete object[key];
		}
	}
	return object;
}


var obj = {
	a : 9,
	b : 2,
	c : 'montana'
}

//17 


function removeArrays(object){
	for(var key in object){
		if(typeof object[key] === 'Array'){
		 delete object[key];
		}
	}
	return object;
}


var obj={
	a:[1, 2, 3],
	b:2,
	c:['hi', 'there']
};

//18

// function getFisrtElementOfProperty(object,key){
// if (key === 'Array'){
// 	return key[0];

// }
// return undefined;
// } 


// 	for(var key in object){
// 		if(typeof key === 'Array'){
// 			return key[0]
// 		}
// 	}
// 	// else if(typeof object[key] !=== 'Array'){
// 	// 	return undefined
// 	// }

// return undefined;
// }
function getFisrtElementOfProperty(object, key){
	if (object[key].length===0 || typeof 'Array'===false || object[key]===undefined){
		return undefined;
	}
	else return object[key][0];
}

var obj ={
	array : [1, 2, 4]
};

getFisrtElementOfProperty(obj,'array')

//19
function getNthElementOfProperty(object,key,number){
	if (object[key].length===0 || typeof 'array'===false || object[key]===undefined){
		return undefined;
	}
	else return object[key][number]
}


var obj ={
	array : [1, 2, 4]
};



//week2-day4



//Ex1
function sum(num){
	if(num === 0){
		return 0;
	}return num + sum(num-1)
}




//Ex2
function factorial(n){
	if(n===0){
		return 1;
	}return n*factorial(n-1)
}



//Ex3
function repeatString(s,n){
	if (n === 0){
		return '';
	}return s+repeatString(s,n-1)
}



//Ex4
function fibonacci(number){
	if(number === 0){
		return 0;
	}
	else if (number <= 2){
		return 1;
	}
return fibonacci(number-1)+fibonacci(number-2);
}
// var array= [1,1,2,3,5,8,13,21]
// function Fibo(Num)
// {
//  if (Num<=1){
//  	return 1;
//  }
//  return array[Num-1]+Fibo(Num-2)
// 	//return array[Num-1]+array[Num-2]
// }



//Ex5



function multiplyBy10(n1,n2){
	if (n2===0){
		return n1;
	}
	return 10*multiplyBy10(n1,n2-1)

}


//ex6


function sumBetween(start,end){
	if(start>end){
		return 0;
	}
	return start+sumBetween(start+1,end)
}



     

//week3d1

//ex1+2

//declae a var and assign the wanted keys for it
var book1 ={
	title:"Harry Potter and the Sorcerer's Stone",
	 author:"J.K. Rowling",
	 Genre:"children Novel",
	 MSRP:20,
	Description:"Throughout the series, Harry is described as having his father's perpetually untidy"
	 +"\nblack hair, his mother's bright green eyes, and a lightning bolt-shaped scar on his"
	 +"\nforehead. He is further described as small and skinny for his age with a thin face"
	 +"\nand knobbly knees, and he wears round eyeglasses.",
	 NumberOfPages:336
}

var book2={
	title:"Romeo and Juliet",
	author:"William Shakespeare",
	 Genre:"Remontic Novel",
	MSRP:95,
	
	 Description:"Romeo and Juliet is a tragedy written by William Shakespeare"
	 +"\n early in his career about two young star-crossed lovers whose deaths"
	+"\n ultimately reconcile their feuding families. It was among Shakespeare's "
	 +"\nmost popular plays during his lifetime and, along with Hamlet, is one of his"
	  +"\nmost frequently performed plays..",
	  NumberofPages:480
};
var book3={
	title:"Structure and Interpretation of Computer Programs",
	author:"Gerald Jay Sussman, Hal Abelson",
	Genre:"Education",
	MSRP:45,
	  Description: "is a computer science textbook by Massachusetts Institute"
	+"\nof Technology professors Harold Abelson and Gerald Jay Sussman with Julie Sussman."
	 +"\n ... It was formerly used as the textbook for MIT"
	  +"\ns introductory course in electrical engineering and computer science",
	  NumberOfPages:657
};



//3 
function bookFactory(title,author,Genre,MSRP,Description,NumberOfPages){
	return{
			title:title,
	author:author,
	Genre:Genre,
	MSRP:MSRP,
	  Description:Description,
	  NumberOfPages:NumberOfPages

	};
}


//4

function disPlayBook(book){
	return book.title + " by " + book.author + " it's a " + book.Genre + " it cost " + book.MSRP + " it talks about " + book.Description + " and it has " + book.NumberOfPages + " pages."
}



//Ex5
var books=[book1,book2,book3];



//6 
function displayBooks(books){

	var books = 0;
	for (var i = 0; i < books.length; i++)
return books;
}




//7
 var books = [
      {
        title:'Lucky Jim',
        author:'Kingsley Amis',
        category:'self help',
        Price: 22.77,
        id : 0 
      },
      {
        title: 'Money',
        author:'Martin Amis',
        category:'Classic',
        price: 32.34,
        id : 1 
      },
      {
        title:'The Information',
        author:'Martin Amis',
        category:’'Classic',
        Price: 23.1,
        id : 2 
       }
]
 function searchBookByAuthor(authorN,arr){
return books[author];
//  }







//E1
function makeCounter() {
	var count = 0;
	function counter(){
		count =counter + 1
		return count;	
	}
		return counter;

}

var counter1 = makeCounter();
var counter2 = makeCounter();

//E2
function makeCounter(number) {
	var count = number;
	 function counter(){
		count += 1
		return count;	}
		return counter;

}
var counter1 = makeCounter(100);
var counter2 = makeCounter(200);

//E3
function pow(exponent){
	
	 function result (number ){
		return number ** exponent;   
	}
	return result;
}

//or 
function pow(exponent){
	 return function  (number ){
		return number ** exponent;   
	}
}


var square = pow(2);
var cube   = pow(3);
var power4 = pow(4);

//E4
 
function zipWith (operation,array1,array2){
	// declare the result array;
	var result= [];
	// if array1 is shorter than array2
	if ( array1.length < array2.length){
		// length has the length of the shorter array
		var length = array1.length ;
	}
	// if array2 is shorter, length takes the length of the shorter array
	var length = array2.length;
// this function will apply the operation to the two arrays
	function oper(){
		// loop over the short array
	 for (var i=0; i<length;i++){
	 	// apply the operation to each element in both arrays
	 	// we put the result in the result array
     result[i]= operation (array1[i],array2[i])
	 }
	 // return the result array
	 return result;
	}
	// return the result of the function oper: which is the result array
	return oper;
}
var x = zipWith(Math.pow,[10,10,10,10], [0,1,2,3] );
var y = zipWith( Math.max,[1,4,7,1,4,7], [4,7,1,4,7,1]);
var z = zipWith((a,b) => a + b,[0,1,2,3], [0,1,2,3] );




//week3d2
//E1
function makeCounter(){
	var Count =0;
	return  function counter() {

    Count = Count + 1;

    return Count;

      };
}
var counter1 = makeCounter();

var counter2 = makeCounter();

//E2
function makeCounter(number){
	var Count =number;
	return  function counter() {

    Count = Count + 1;

    return Count;

      };
}
var counter1 = makeCounter(100);

var counter2 = makeCounter(200);
//E3 +E4
function makeCounter(){
	var count = 0;
	return {
		up: function counter(){
			count= count+1;
			return count;
		},
		down: function counter2(){
			count=count-1;
			return count;
		},
		reset: function counter3(){
			count = 0;
			return count;
		}

	};
	
}
 var counter = makeCounter();

//E5
function makeAccount(initial){
	var trans=[];
	var balance = initial; 
	var before;
	function  transfactory(type,amount,before,after,status){
		return{type:type, amount:amount, before:before, after:after, status:status,date:new Day()}

		
	}
	return {
		withdraw : function(amount){
			 before=balance;
			if (balance - amount >=0){
				balance = balance - amount;
				return "Here's your money: $"+amount; 
				tras.unshift(trasfactory('withdraw',amount,before,balance,'approved'));
			}
			return "Insufficient funds" 
			tras.unshift(trasfactory('withdraw',amount,before,balance,'denied'));

		},
		deposit: function(amount){
			balance=balance+amount;
			tras.unshift(trasfactory('withdraw',amount,before,balance,'approved'))
		},
		transactionHistory: function(){
			return trans;

		}
	};
}

var account = makeAccount(100);




//week3d3

function makeToDoList (){
	var id=0;
    var todos = [];

    function generateID(){
	   id=id+1;
	   return id;
     }

    function factoryOfToDos(task, status){
	    return{ id : generateID(),
		        task:task,
		       status: status
	          }
    }

    function displayTodo(todo) {
	    return ('ID: ' + todo.id + ' --> ' + 'task: ' + todo.task + ' , ' + 'status: ' +todo.status); 
     }
	return { display: function displayToDos(){
		                 var display='';
	                    if(todos.length !== 0){
	                      for (var i = 0; i < todos.length;i++){
		                     display=display+ displayTodo(todos[i])+'\n';
	                        }
	                      return display;
	                    }
	                    return [];
	                   },
             add : function addToDo(newToDo,task,status){
	                  var newToDo= factoryOfToDos(task,status);
	                   todos.push(newToDo);
	                   console.log(todos)
                    },
             complete : function toggleComplete(id,status) {
             	//status has to either 'completed' or 'umcompleted'
		                   for (var i =0;i<todos.length;i++) {
		                      if (todos[i].id === id) 
			                     todos[i].status = status; 
	                        }
                         },
              clearCompleted: function (){
              	                for (var i =0; i < todos.length; i++){
              	                	if (todos[i].status === 'completed'){
              	                		todos.splice(i,1);
              	                	}
              	                }
                              }           
} 


}
var list =makeToDoList ();



