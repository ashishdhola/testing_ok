let arr = [7, 8, 12, 27, 88];
let size = arr.length;
let element = 45;
let index = 4;

console.log("Orignal array :", arr);

for (let i = size - 1; i >= index; i--) {

    arr[i + 1] = arr[i];
}

arr[index] = element;
console.log("New array :", arr);

