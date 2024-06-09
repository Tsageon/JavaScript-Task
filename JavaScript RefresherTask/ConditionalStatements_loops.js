//I'ma be honest this threw me for a loop//
let temperature = 20;
let message;

if (temperature < 0) {
    message = "It's freezing!";
} else if (temperature >= 0 & temperature <= 15) {
    message = "It's cold.";
} else if (temperature >= 16 & temperature <= 25) {
    message = "It's mild.";
} else {
    message = "It's warm.";
}

console.log(message);

switch (true) {
    case (temperature < 0):
        message = "It's freezing!";
        break;
    case (temperature >= 0 & temperature <= 15):
        message = "It's cold.";
        break;
    case (temperature >= 16 & temperature <= 25):
        message = "It's mild.";
        break;
    default:
        message = "It's warm.";
}

console.log(message);

let number = 6;

if (number % 2 === 0 & number % 3 === 0) {
    console.log("Divisible by both.");
} else if (number % 2 === 0) {
    console.log("Divisible by 2.");
} else if (number % 3 === 0) {
    console.log("Divisible by 3.");
} else {
    console.log("Not divisible by 2 or 3.");
}

switch (true) {
    case (number % 2 === 0 & number % 3 === 0):
        message = "Divisible by both.";
        break;
    case (number % 2 === 0):
        message = "Divisible by 2.";
        break;
    case (number % 3 === 0):
        message = "Divisible by 3.";
        break;
    default:
        message = "Not divisible by 2 or 3.";
}

console.log(message);

for (let i = 1; i <= 10; i++) {
    console.log(i);
}
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("<=100", sum)

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}


let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("<=100", sum);


const numbers1 = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers1.length; i++) {
    console.log(numbers1[i]);
}


const numbers2 = [3, 7, 2, 5, 10, 6];
let largestNumber = numbers2[0];
for (let i = 1; i < numbers2.length; i++) 
    if (numbers2[i] > largestNumber) {
        largestNumber = numbers2[i];
    }


for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}


let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Sum of numbers from 1 to 100:", sum);

for (let i = 1; i < 50; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}
   