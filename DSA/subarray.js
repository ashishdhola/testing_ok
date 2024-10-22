let arr = [5, -7, -6, 1, 3, 0];
let maxSum = 0;
let sum = 0;

for (let i = 0; i < arr.length; i++) {

    sum = sum + arr[i];

    if (sum > maxSum) {

        maxSum = sum;

    }
}
console.log(maxSum);
