//TODO Object trong Javascript

var myInfo = {
	name: "Tiến Đạt",
	age: 21,
	isMale: true,
	"full-name": "Nguyễn Tiến Đạt",
	getName: function () {
		return this.name;
	},
};

myInfo.email = "ntd.k108cva@gmail.com";
myInfo["address"] = "Hà Nội, VN";

console.log(myInfo);

//TODO Xóa một key
delete myInfo.age;
console.log(myInfo);

console.log(myInfo.getName());
