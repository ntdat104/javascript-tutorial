//TODO Object constructor

function User(firstName, lastName, avatar) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.avatar = avatar;

	this.getName = function () {
		return `${this.firstName} ${this.lastName}`;
	};
}

var author = new User("Đạt", "Nguyễn", "Ava");

author.title = "Hello";

console.log(author);
console.log(author.getName());
