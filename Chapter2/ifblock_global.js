let x=40;
if(true)
{
    console.log(x);//it will print 40 because x is declared in global scope and it is accessible inside the if block
}
let y=45;
if(true)
{
    //console.log(y);//It will throw a ReferenceError because y is declared in global scope but it is not accessible inside the if block because it is declared after the if block
    let y=90;//it is a different variable y which is declared inside the if block and it is not accessible outside the if block
console.log(y);
}   