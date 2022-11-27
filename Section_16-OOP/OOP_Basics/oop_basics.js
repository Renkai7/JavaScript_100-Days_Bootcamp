// Basic constructor
function Person(name, dob) {
	this.name = name;
	this.birthday = new Date(dob);
	this.calculateAge = function () {
		const diff = Date.now() - this.birthday.getTime();
		const ageDate = new Date(diff);
		// Formula for calculating age
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	};
}

// const ren = new Person("Ren");
const angela = new Person("Angela", "1985-9-10");

// console.log(ren.name);
console.log(angela);
console.log(angela.calculateAge());
