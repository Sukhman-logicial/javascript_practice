
var marks = [10, 20, 30, 40, 50]

console.log(marks[2])

marks [4] = 60 // to replace the value from array index wise

console.log(marks)

marks.push(70) // to add the new value into array in the last

console.log(marks)

marks.unshift(0) // to add the new value on first in the array

console.log(marks)

marks.pop()

console.log(marks)

console.log(marks.length) // to get the length of array

console.log(marks.indexOf(40)) // to check the index number of value in the array

console.log(marks.includes(100)) // to check the value present in array if value is present it appear true if not present then it will show false

subMarks = marks.slice(2,4)

console.log(subMarks)

for ( let i=0; i<marks.length; i++)
{
    console.log(marks[i])
}

console.log("******************")

var sum = 0

for (let k=0; k<marks.length; k++)
{
    sum = sum + marks[k]
}

console.log(sum)


let total = marks.reduce((sum, mark)=>sum + mark, 0) // this is a reduce method to sum and multiply the values of the array

console.log(total)