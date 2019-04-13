// var one = [1,2,3,4,5];
// var two = [,6,7,8,9,10];


// function first() {
// 	for ( let i = 0; i < one.length; i++) {
// 		console.log(one[i]);

// 	}
// }

// first(one)

// Using a callback to store a function so
// I can call it in the set interval function.

// var callback = function() {
//     console.log("`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*");

// }

// var callback1 = function() {
//     console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

// }

// var callback2 = function() {
//     console.log("|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/");

// }

// setInterval(callback, 1000);
// setInterval(callback1, 1000);
// setInterval(callback2, 1000);




//-----------------------------------------------------



// 
// function currentLine(line) {
//   if (line.length === 0) {
//     return "The line is currently empty.";
//   }

//   const numbersAndNames = []; // const cant be reassigned

//   for (let i = 0, l = line.length; i < l; i++) {
//     numbersAndNames.push(`${i + 1}. ${line[i]}`);
//   }

//   return `The line is currently: ${numbersAndNames.join(', ')}`;
// }





// function nowServing(line) {
//   if (line.length === 0) {
//     return "There is nobody waiting to be served!";
//   }

//   return `Currently serving ${line.shift()}.`;
// }

// function takeANumber(line, name) {
//   line.push(name);

//   return `Welcome, ${name}. You are number ${line.length} in line.`;
// }




// function simpleArraySum(ar) {
// 	var sum = 0;

//     for (let i = 0; i < ar.length; i++) {
//         sum = ar[i] + sum;
//     }
//     console.log(sum);

// }

// simpleArraySum([1,2,3]);

var a = [1,2,3]
var b = [2,1,1]

function compareTriplets(a, b) {
    var score = [];

    for (let i = 0; i < a.length; i++) {
        var one = 0;
        var two = 0;
        if (a[i] > b[i]) {
            one++;
            } else {
                two++;
            }score = [one, two];
        }console.log(score);
}

compareTriplets(a, b);

var arr = [1,2,3,4,5,6,7,8,9,10]

function letters(arr) {
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}

letters(arr);