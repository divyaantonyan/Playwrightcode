let responseTimes = [320, 85, 1200, 450, 99];
let sorted = responseTimes.sort();
console.log("Fastest:", sorted[0]);

//sorting done based on the first digit of the number, not the whole number. To sort based on the whole number, we need to provide a compare function to the sort method.
let sorted1 = responseTimes.sort((a, b) => a - b);
console.log("Fastest:", sorted1[0]);//ascending order
console.log("Slowest:", sorted1[sorted1.length - 1]);//descending order