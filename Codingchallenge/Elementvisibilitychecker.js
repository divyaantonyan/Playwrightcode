let elementstatus = "isPresent ";//isPresent, isDisplayed, isEnabled
if(elementstatus === "isPresent"&&elementstatus === "isDisplayed"&&elementstatus === "isEnabled")
    {
    console.log("Element is Ready for interaction, all are true");
}
else if(elementstatus === "isDisplayed"&&elementstatus === "isPresent"&&elementstatus === "isNotEnabled"){
    console.log("Element is DISABLED but visible on the page");
}
else if(elementstatus === "isPresent"&&elementstatus === "isNotDisplayed"){
    console.log("Element is not displayed on the page   but it is present in the DOM  ");
}   else if(elementstatus === "isNotPresent"){
    console.log("Element is not present in the DOM");
}   