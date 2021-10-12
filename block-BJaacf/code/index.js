// 1. Create an array named numbers and store 5 number values in it
let numbers = [12, 23, 34, 45, 56, 67];

// 2. Calculate the sum of array items and print it to the console using console.log()
let sum = 0;
for(let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
} 
console.log(sum);

// 3. Calculate the average of array items and print it to the console using console.log()

let average = 0;
    average = sum / numbers.length;
console.log(average);

// 4. Find the highest number in the array and print it to the console using console.log()
let max = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] > max){
    max = numbers[i];
    }
    console.log(max);
}

// 5. Find the lowest number in the array and print it to the console using console.log()
let lowest = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] < lowest){
    lowest = numbers[i];
    }
    console.log(lowest);
}
// 6. Find the even numbers in the array and print them to the console using console.log()

for(let number of numbers) {
    if(number % 2 == 0) {
        console.log(number);
    }
}

// 7. Find the odd numbers in the array and print them to the console using console.log()

for(let number of numbers) {
    if(number % 2 != 0){
        console.log(number);
    }
}

// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()

for (let number of numbers) {
    if(number % 5 == 0) {
        console.log(number);
    }
}

// 9. Log all the element of the array one by one
for(let number of numbers) {
    console.log(number);
}

// 10. Find all the number in the array that is divisible by 3
for(let number of numbers) {
    if(number % 3 == 0) {
        console.log(number);
    }
}
