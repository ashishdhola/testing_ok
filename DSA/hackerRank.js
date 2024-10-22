let arr = [4, 4, 1, 3];

let max = arr[0];
let count = 0;

for (let i = 0; i < arr.length; i++) {

    if (max < arr[i]) {
        max = arr[i];
    }
}

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === max) {
        count++;
    }

}

console.log(count);

