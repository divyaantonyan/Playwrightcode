let A,B,C,D,E,F;
let Grade=97;
//check edge case
if (Grade < 0 || Grade > 100) {
    console.log("Invalid grade");
}
if(typeof Grade !== "number"){
    console.log("Invalid grade");
}   
if (Grade >= 90&& Grade <= 100) {
    console.log("A");
}
else if (Grade >= 80 && Grade < 90) {
    console.log("B");
}else if (Grade >= 70 && Grade < 80) {
    console.log("C");
}else if (Grade >= 60 && Grade < 70) {
    console.log("D");
}else if (Grade >= 0 && Grade < 60) {
    console.log("F");
}  

