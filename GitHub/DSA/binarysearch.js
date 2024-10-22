let arr = [12, 38, 46, 66, 87, 90];
let find = 66;
let first = 0;
let last = arr.length - 1;

do {
    let mid = Math.floor((first + last) / 2);

    if (arr[mid] == find)
        console.log(`${arr[mid]} is at index ${mid}`);

    if (arr[mid] > find)
        last = mid - 1;

    else
        first = mid + 1;
} while (first <= last);


// let arr = [12, 38, 46, 66, 87, 90];
// let find = 46;
// let first = 0;
// let last = arr.length - 1;
// let mid;

// while (first <= last) {
//     mid = Math.floor((first + last) / 2);

//     if (arr[mid] === find) {

//         console.log(`${find} is at index ${mid}`);
//         break;
//     }
//     else if (arr[mid] > find) {

//         last = mid - 1; // left half
//     }
//     else {

//         first = mid + 1; // right half
//     }
// }

// if (first > last) {

//     console.log(`${find} is not present in the array`);
// }

