const user = {
    firstName: "Pramod",
    lastName: "Dutta",
    get fullName() {
        return this.firstName + this.lastName;
    },
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
    }
};
//getter and setter are special methods that allow us to define how to access and modify the properties of an object.
console.log(user.fullName);
user.fullName = "Amit Sharma";
console.log(user.fullName);