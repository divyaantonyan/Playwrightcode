// Objects means a collection of key-value pairs
// Key and value

let student1 = { name: "Amit", age: 65 };
console.log(student1.name);
console.log(student1.age);

// Objects can have any number of key-value pairs
let student2 = { name: "Pramod" };
console.log(student2.name);//output: Pramod
console.log(student2.age);  //output  undefined
let student3 = { name: "Pramod", age: 87, phone: 987654320 };
console.log(student3.name);
console.log(student3.age);
console.log(student3.phone);
// Key will not be in the doubt quotes, value can be in doubt quotes if it is a string,
// - otherwise it will not be in doubt quotes
// below key in doubt is actually JSON
let JSON_student4 = { "name": "Pramod", "age": 87, "phone": 987654320 };

// -------


let a = { status: "pass" };
console.log(a.status);//output: pass
console.log(a["status"]);//output: pass

let a1 = { status: 'pass' };
console.log(a1.status);//output: pass

let b = a;  // b copies the REFERENCE, not the object
b.status = "fail";
console.log(a.status);//output: fail


// Two separate objects — different memory
let c = { status: "pass" };
let d = { status: "pass" };
console.log(c === d);
//output: false because they are different objects in memory, even though they have the same content