// class expression
// const PersonCl = class {}

// class declaration
class PersonCl {
	constructor(firstName, birthYear) {
		this.firstName = firstName;
		this.birthYear = birthYear;
	}
}

const jessica = new PersonCl("Jessica", 1996);
console.log(jessica);
