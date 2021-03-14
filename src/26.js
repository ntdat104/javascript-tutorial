//TODO Object prototype - Basic

/*
 * 1. Prototype là gì?
 * 2. Sử dụng khi nào?
 */

function User(firstName, lastName, avatar) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.avatar = avatar;

	this.getName = function () {
		return `${this.firstName} ${this.lastName}`;
	};
}

User.prototype.className = "F8";
User.prototype.getAvatar = function () {
	return this.avatar;
};

var user = new User("Đạt", "Nguyễn", "Ava");

console.log(user.className);
console.log(user.getAvatar());
