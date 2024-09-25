// ------------------------------------------------------------

console.log(names);
let names = "abc";

// ReferenceError: Cannot access 'name' before initialization

// -----------------------------------------------------------

const a = 1 < 2 < 3;
const b = 1 > 2 > 3;

console.log(a, b);

// a is true, b is false

// -----------------------------------------------------------

console.log(1);

setTimeout(() => {
  console.log(2);
}, 1000);

setTimeout(() => {
  console.log(3);
}, 0);

console.log(4);

// 1, 4, 3, after one second 2

// -----------------------------------------------------------

numb = 6;
console.log(numb);
let numb;

// ReferenceError: Cannot access 'numb' before initialization

// -----------------------------------------------------------

console.log(typeof "nitin"); // string
console.log(typeof 1); // number

console.log(typeof typeof "nitin"); // string
console.log(typeof typeof 1); // string

// typeof 1 = "number" || typeof "number" = string

// -----------------------------------------------------------

const numbers = [1, 2, 3, 4, 5];
const [y] = numbers;

console.log(y);

// 1

// due to the destructuting of the index. [y] is asigned to the 1

// -----------------------------------------------------------

let c = 3;
let d = new Number(3);

console.log(c == d); // true
console.log(c === d); // false

console.log(typeof c); // number
console.log(typeof d); // object

// -----------------------------------------------------------

const firstPromise = new Promise((res, req) => {
  setTimeout(res, 500, "one");
});

const secondPromise = new Promise((res, req) => {
  setTimeout(res, 100, "two");
});

Promise.race([firstPromise, secondPromise]).then((res) => {
  console.log(res);
});

// two

// -----------------------------------------------------------

console.log(3 + 4 + "5");

// 75

// -----------------------------------------------------------

let num = 0;
console.log(num++); // 0
console.log(++num); // 2

// -----------------------------------------------------------

console.log(aa); // undefined
var aa;
aa = 6;
console.log(aa); // 6

// -----------------------------------------------------------

getData1();
getData2();

function getData1() {
  console.log("Hello"); // Hello
}

var getData2 = () => {
  console.log("i am xyz"); // TypeError: getData2 is not a function
};

// if you want to print getData2() then call it at the last

// -----------------------------------------------------------

function func() {
  try {
    console.log(1); // execute the try block
    return; // exit the function immediately but not fully
  } catch (e) {
    console.log(2); // no errors so it will not executed
  } finally {
    console.log(3); // it will run regardless
  }
  console.log(4);
}

func();

// 1 3

// -----------------------------------------------------------

function job() {
  return new Promise((resolve, reject) => {
    reject();
  });
}

let promise = job();

promise
  .then(() => {
    console.log("1"); // the initial then block will not executed because its rejected
  })
  .then(() => {
    console.log("2"); // same
  })
  .catch(() => {
    console.log("3"); // it will executed
  })
  .then(() => {
    console.log("4"); // despite rejections it will executed because this .then is the part of the promise chain
  });

// 3 4

// -----------------------------------------------------------

for (var i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log("value is " + i);
  });
}

/*
value is 10
value is 10
value is 10
value is 10
value is 10
value is 10
value is 10
value is 10
value is 10
value is 10 
*/

// -----------------------------------------------------------

console.log(myVar);
let myVar = 10;

// ReferenceError: Cannot access 'myVar' before initialization

// -----------------------------------------------------------

console.log([] == []);

// false
// because both allocate in different memory location.
// Reference store in different location in memory

// -----------------------------------------------------------

const Name = "Nitin";
age = 21;

console.log(delete Name); // false
console.log(delete age); // true

/* delete operator is used to delete the properties of the object.
it doesn't affect the variables declared with var let const. thats why its false.

whereas age = 21 is a globle object. thats why it is true*/

// -----------------------------------------------------------

let newList = [1].push(2); // .push method in array it returns the length of the new array i.e. 2

console.log(newList.push(3));

/* calling .push method to the list but new list will hold numeric value,
that is 2, we cant use .push method to the numeric value thats why type error */

// TypeError: newList.push is not a function

// -----------------------------------------------------------

var employeeId = "abc"; // global variable

function foo() {
  employeeId = "123";
  return;

  function employeeId() {}
}
foo();
console.log(employeeId);

// abc

// because of hoisting. variable shadowing.

// -----------------------------------------------------------

const A = {};
const B = { key: "B" };
const C = { key: "C" };

A[B] = 146; // A["[object Object]"] = 146    object object string
A[C] = 286; // A["[object Object]"] = 286

console.log(A[B]); // it will check A["[object Object]"] that is 286

// 286

// -----------------------------------------------------------

const X = {
  count: 0,
};

const Y = X;
Y.count = X.count++;

console.log(Y.count, X.count);

// 0 0

// -----------------------------------------------------------

const arr1 = [1, 2, 3];
const str = "1,2,3";

console.log(arr1 == str);

// true

// -----------------------------------------------------------

console.log(5 > "15" < 5); // true
console.log(7 > "15" < 7); // true
console.log(7 > "85" < 5); // true

// -----------------------------------------------------------

console.log("Start");
setTimeout(()=>{
    console.log("Timeout");
});
Promise.resolve().then(()=>console.log("Promise"))
console.log("End")


/*
Start
End
Promise
Timeout
*/

// -----------------------------------------------------------

console.log("Start");

Promise.resolve().then(()=>console.log("Promise"))
setTimeout(()=> console.log("Timeout 1"),0);

Promise.resolve().then(()=>console.log("Promise"))
setTimeout(()=> console.log("Timeout 2"),0);

console.log("End")

/*
Start
End
Promise
Promise
Timeout 1
Timeout 2
*/
    
// -----------------------------------------------------------


for(var i = 0; i<3; i++) {
  setTimeout(function() {
      console.log(i);
  }, 2000 + i);
}

/*
after 2 seconds:
3
3
3
*/


// -----------------------------------------------------------

let output = (function(x){
  delete x;
  return x;
})(3);
console.log(output);


// 3

// if we remove return x then it gives undefined

// -----------------------------------------------------------

// -----------------------------------------------------------

// -----------------------------------------------------------
