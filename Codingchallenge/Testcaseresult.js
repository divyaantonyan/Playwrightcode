//stored the test results in an array
const testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"];
console.log("Total tests  " + testResults.length);
let passedcount = 0,failedcount = 0, skippedcount = 0;
for(let i=0; i<testResults.length; i++){
    if(testResults[i] === "pass"){
        passedcount++;      
    }  
    else if(testResults[i] === "fail"){
        console.log("Test " + (i+1) + " failed");
        failedcount++;
    } 
    else if(testResults[i] === "skip"){
        console.log("Test " + (i+1) + " skipped");
        skippedcount++; 
    } 
    
}
console.log("Passed test count: " + passedcount);
let passpercentage = (passedcount/testResults.length)*100;
console.log("Pass percentage: " + passpercentage);
console.log("Failed test count: " + failedcount);
console.log("Skipped test count: " + skippedcount);
if(passpercentage >= 100){
    console.log("ready for release !");
}
else if(failedcount <=2 ){
    console.log("VERDICT: Minor failures. Review before release.");
}
else if(failedcount > 2 ){
    console.log("block the  release");
}