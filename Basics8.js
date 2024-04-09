// statements > Switch

let day = "Holiday"

switch(day){
    case "Monday":
        console.log("7am");
        break;
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
        console.log("4am");
        break;
    case "Friday":
        console.log("9am");
        break;
    case "Saturday":
    case "Sunday":
        console.log("8am");
        break;
    default:
        console.log("Holiday");
}

// Template literal

let data0 = 7;

let data00 = 8;

let result = data0 * data00;

console.log(`${data0} ${data00} ${result}`);


console.log("******************************************");


var myfun1 = function show() {  
    console.log("It is a Function Expression");     
   }

myfun1()