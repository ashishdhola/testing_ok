class Queue {

    constructor(name) {
        this.name = "jfbj"
    }

    add() {
        console.log(this.name);
    }

}

let q1 = new Queue("dhshd");
// q1.add();
// q1.name("dhvani");
q1.name = "dhvani"

// console.log(q1.name);
q1.add();


// class Queue {
//     constructor() {
//         this.nameSymbol = Symbol("name"); // Private property name
//         this.name = "jfbj";
//     }

//     add() {
//         console.log(this[this.nameSymbol]); // Access private property
//     }
// }

// let q1 = new Queue();
// // q1.name = "dhvani"; // This won't modify the private property

// console.log(q1.name); // Outputs: jfbj (original value)
// q1.add(); // Outputs: jfbj (using the getter method)


