
let attempt = 0;
let maxRetries = 5;
let success = false;    
do {
    attempt++;
    let randomValue = Math.random();
    console.log("Attempt " + attempt + ": Random value = " + randomValue.toFixed(2));   
    if(randomValue > 0.6){
        success = true;
    }
}while (attempt < maxRetries && !success);

if(success){
    console.log("API call PASSED after  " + attempt + " attempts.");
}
else{
    console.log("API call failed after " + maxRetries + " attempts.");
}