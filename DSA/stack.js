let arr = [];
let size = 5;

function push(element) {
    if (arr.length < size) {
        arr[arr.length] = element;
        console.log(arr);
    }
    else {
        console.log("Stack Overflow");
    }

}

function pop() {

    // if () {
        // console.log("array is empty");
    // }
    // else {
    //     arr.length = arr.length - 1;
    //     console.log(arr);
    // }
}

function travel() {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function isEmpty() {
    if (arr.length === 0) {
        console.log("Array is empty");
    }
}

function reverse() {
    for (let i = arr.length; i >= 0; i--) {
        console.log(arr[i]);
    }
}

function lastSecond() {
    console.log(arr[arr.length - 2]);
}

function tail() {
    console.log(arr[arr.length - 1]);
}

function head() {
    console.log(arr[0]);
}

// push(10);
// push(20);
// push(30);
// push(40);
// reverse();
// lastSecond();

// pop();

pop();

// console.log("jegf");