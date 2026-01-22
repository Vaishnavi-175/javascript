function minMaxMedian(arr) {
    arr.sort((a, b) => a - b); 
    let min = arr[0];
    let max = arr[arr.length - 1];
    let median;

    if (arr.length % 2 === 0) {
        median = (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2;
    } else {
        median = arr[Math.floor(arr.length / 2)];
    }

    return { min, max, median };
}


let numbers = [5, 1, 9, 3, 7];
console.log(minMaxMedian(numbers));
