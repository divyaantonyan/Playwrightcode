let testresult=["Pass ","Fail ","Pass ","Pass ","Fail "];//can have duplicate values
console.log(testresult[3]);
testresult[1]="Pass ";
console.log(testresult[1]);

//can have hetreogeneous values.In java it is not possible but in javascript it is possible
let myarray=[1,"Hello",true,3.14];
console.log(myarray[1]);
console.log(myarray[2]);
 
let wrr=[];//empty array
let myarray1=[10,30,20,45,67];
console.log(wrr.length);
console.log(wrr[5]);//undefined

console.log(myarray1.length);
console.log(myarray1[myarray1.length-1]);//to access last element of the array
console.log(myarray1[3]);//to access 4th element of the array
//to create an array using Array.of() method
let test=Array.of("Pass ","Fail ","Pass ","Pass ");
console.log(test);
console.log(test[3]);
let test1=Array.of(1.2,3.4,5.6,7.8);

console.log("22nd line "+ test1);

//can also create an array using new keyword
let numbe=new Array(10,20,30,40,50);
//can also create a character array using Array.from() method
let chars=Array.from("Hello",function(char){
    return char.toUpperCase(); 
});
console.log(chars);
//is it possible to create a numerical array using Array.from() method
// No, it is not possible to create an array using Array.from() method with number values.
//let numer=Array.from(1,4,56,67);
//console.log("Using array .from " + numer);
//to add multiple characters to an array using push() method
let chars1=[];
chars1.push("Well","Orange","Red","Lemon","Drive");
console.log("Multiple elements added: " +   chars1);
let chars2=[];
chars2.push("4.5.6.7");
console.log(chars2);
//can create an aray using new keyword
let chararry=new Array("test1","test2");
console.log(chararry);