// class expression
// const PersonCl = class {}

// class declaration
class PersonCl {
	constructor(firstName, birthYear) {
		// properties
		this.firstName = firstName;
		this.birthYear = birthYear;
	}

	// Methods
	calcAge() {
		console.log(2037 - this.birthYear);
	}

	greet() {
		console.log(`Hey ${this.firstName}`);
	}
}

const jessica = new PersonCl("Jessica", 1996);
console.log(jessica);
jessica.calcAge();
jessica.greet();

// Notes
// Classes are executed in strict mode
