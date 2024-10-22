// student is the object in which, for example - age is the key and 20 is it's value i.e. key : value
const student = {
    fullName: "Rahul Kumar",
    age: 20,
    cgpa: 8.2,
    isPass: true,
};

console.log(student);
console.log(student["age"]); // to access only one key from the object
console.log(student["fullName"]);

console.log(student.isPass);

/* YOU CANNOT UPDATE THE CONST VALUE BUT YOU CAN UPDATE THE CONST OBJECT KEY MEANS IF 
 WE HAVE CONST WITH AN OBJECT YOU CAN CHANGE/UPDATE THE OBJECT'S KEY */

//to change the value
student["age"] = student["age"] + 5;
// student.age = student.age + 5;
console.log("Updated Age is :",student["age"]);

student.fullName = "Dhvani Chhajed";
console.log("Updated Name is :",student.fullName);

//TYPE-OF
console.log("typeof name is :",typeof student.fullName);
console.log("typeof age is :",typeof student.age);
console.log("typeof cgpa is :",typeof student["cgpa"]);
console.log("typeof isPass is :",typeof student.isPass);

