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



