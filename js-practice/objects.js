// Gonna practice creating objects and calling their properties

var person = {
	firstName: "Otha",
	lastName: "Hernandez",
	age: "30",
	fullName: function() {
		return this.firstName + " " + this.lastName;
	}
};

var name = person.fullName();

console.log(name);