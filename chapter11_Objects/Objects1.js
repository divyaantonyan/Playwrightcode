
//Here  we will see how to create objects in JavaScript and how to access their properties and methods.
//  We will also see how to use the 'this' keyword in objects and how to create methods that return the object itself for chaining.
const calculator = {
    value: 0,
    add(n) {
        this.value += n;
        return this;
    },
    substract(n) {
        this.value -= n;
        return this;
    }

}

console.log(calculator.add(5).substract(5));
//what it means is calculator.add(5) will return the calculator object itself, then we can call substract(5) on that returned object.
// { value: 0, add: [Function: add], substract: [Function: substract] }