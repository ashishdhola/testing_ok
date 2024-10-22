let arr = [2, 6, 9, 5, 1, 3, 8];
// let arr = [2, 6, 5, 1, 3, 8, 9];
// let arr = [8, 3, 1, 4, 2, 7, 6, 5];

let temp;
let c = 0;
let flag = false;

for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < arr.length; j++) {

        if (arr[j] > arr[j + 1]) {

            temp = arr[j];
            arr[j] = arr[j + 1]
            arr[j + 1] = temp;
            c++;
            console.log(c,arr);
            flag = true;
        }
        if (flag==false) {
            console.log("The sorted array is", arr);
            break;
        }
    }
    // if (!flag) {
    //     console.log("The sorted array is", arr);
    //     break;
    // }

}

// console.log("jhfrs");
