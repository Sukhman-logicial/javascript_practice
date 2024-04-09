// Async

console.log("one");
console.log("two");

setTimeout(() => {
    console.log("hello");
}, 5000); //timeout

console.log("three");
console.log("four");


// Call back function

// function sum(a, b){
//     console.log(a + b);
// }

// function calculator(a, b, sumCallback){
//     sumCallback(a, b);
// }

// calculator(3, 2, (a, b) => {
//     console.log(a+b);
// });


// const hello = () => {
//     console.log("hello2");
// }

// setTimeout(hello, 3000);


//Nesting

// let age = 61;
// if (age>= 18){
//     if(age>= 60){
//         console.log("Senior");
//     } else{
//         console.log("Middle");
//     }
// } else {
//     console.log("Child");
// }


