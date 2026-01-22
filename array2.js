let input = prompt("Enter array elements separated by commas:");
let arr = input.split(",");

console.log("Original array:", arr);

arr.push("newEnd");
console.log("After push('newEnd'):", arr);

let popped = arr.pop();
console.log("After pop():", arr, "| Popped element:", popped);

arr.unshift("newStart");
console.log("After unshift('newStart'):", arr);

let shifted = arr.shift();
console.log("After shift():", arr, "| Shifted element:", shifted);

let index = arr.indexOf("example");
console.log("Index of 'example':", index);

let hasElement = arr.includes("example");
console.log("Array includes 'example'? ", hasElement);

let sliced = arr.slice(1, 3);
console.log("Sliced array (1,3):", sliced);

arr.splice(1, 1, "spliceElement");
console.log("After splice(1,1,'spliceElement'):", arr);

arr.reverse();
console.log("After reverse():", arr);

arr.sort();
console.log("After sort():", arr);

let joined = arr.join(" - ");
console.log("Joined array:", joined);

let newArr = arr.concat(["extra1", "extra2"]);
console.log("After concat(['extra1','extra2']):", newArr);
