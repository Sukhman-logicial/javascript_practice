// Functions and arrow functions

// Create a new function
function greet(){ 
    console.log("Hello World !!")
}

greet(); // Call the function

console.log("-------------------------------------------------------------");


function greeting(user)
{
    return `Good Morning ${user}!!` // if we assign value to variable from function then we have to use return method to call that and return will work for the only once
}
let user = "sukhman";
let str = greeting(user);
console.log(str);

console.log("-------------------------------------------------------------");

 let add = function(num1, num2) // we can assign the function to variable that we called as anonyoumus function and these are function experssion
    {
    return num1 + num2
    }

 let result = add(5,6);

 console.log(result);

 console.log("-------------------------------------------------------------");

 function data (numb1, numb2, numb3 = 8) // if create any variable inside the function that is called local variable and if we create function outside the function that is global variable
    {
        return numb1 + numb2 + numb3
    }

let ans= data(5, 6,);

console.log(ans);
