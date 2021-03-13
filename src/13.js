//TODO Kiểu gữ liệu trong javascript

/*
 * 1. Dữ liệu nguyên thủy - Primitive Data
 * - Number
 * - String
 * - Boolean
 * - Undefined
 * - Null
 * - Symbol
 *
 * 2. Dữ liệu phức tạp - Complex Data
 * - Function
 * - Object
 */

//* Number type
var a = 1;
var b = 1.5;

//* String type
var fullName = 'Tiến " Đạt';

//* Boolean type
var isSuccess = true;

//* Undefined type
var age;

//* Null type
var isNull = null; //! nothing

//* Symbol type
var id = Symbol("id"); //! unique
var id2 = Symbol("id"); //! unique

//* Functione type
var myFunction = function () {
	console.log("Hello");
};

//* Object type
var myObject = {
	name: "Tiến Đạt",
	age: 21,
	isMale: true,
	myFunction: function () {},
};

var myArray = ["Javascript", "PHP", "Python"];

//TODO Kiểm tra kiểu dữ liệu
//* Sử dụng toán tử typeof + biến
