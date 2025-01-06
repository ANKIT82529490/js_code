let printFullName = function (state) {
    console.log(this.name, this.lastname, 'state-->', state);
};

// Define an object with the required properties
let person = {
    name: 'John',
    lastname: 'Doe'
};

// Use `call` to explicitly set the `this` context
// printFullName.call(person, 'mumbai');

printFullName.call(person,'mumbai')

printFullName.apply(person,['amit'])

let namePRint = printFullName.bind(person,'Bind')

namePRint()
