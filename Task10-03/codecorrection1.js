

//Deep vs Shallow Copy (Tricky)

//What is the output and why? How would you fix it?

let suite1 = [{ name: "login", status: "pass" }];
let suite2 = [...suite1];//suite1 is assigned to suite2 using spread operator, which creates a shallow copy of the array. So, both suite1 and suite2 are pointing to the same object in memory. Therefore, when we change the status of suite2[0], it also changes the status of suite1[0].
suite2[0].status = "fail";//assigned fail to suite2[0]
console.log(suite2[0].status);//fail will print
//console.log(suite1[0].status);