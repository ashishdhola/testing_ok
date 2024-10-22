let arr = [2, 6, 9, 5, 1, 3, 8];
// let arr = [2, 6, 5, 1, 3, 8, 9];
// let arr = [8, 3, 1, 4, 2, 7, 6, 5];

let temp;
let c = 0;
let flag = false;

for (let i = 0; i < arr.length; i++) {
    flag = true;

    for (let j = 0; j < arr.length; j++) {

        if (arr[j] > arr[j + 1]) {

            temp = arr[j];
            arr[j] = arr[j + 1]
            arr[j + 1] = temp;
            flag = false;
            c++;
            console.log(c, arr);
        }
    }
    if (flag == true) {
        console.log("The sorted array is", arr);
        break;
    }
}

// console.log("jhfrs");
