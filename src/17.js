//TODO Kiểu số (Number) trong Javascript

/*
 * 1. Tạo giá trị Number
 * - Các cách tạo
 * - Dùng cách nào? Tại sao?
 * - Kiểm tra data type
 *
 * 2. Làm việc với Number
 * - To string
 * - To Fixed
 */

var age = 18;
var PI = 3.14;

var otherNumber = new Number(9);

var result = 20 / "ABC";
console.log(result); //* NaN - đại diện cho 1 số ko hợp lệ

//! Kiểm tra NaN
console.log(isNaN(result)); //* true

//TODO Chuyển đổi về string
console.log(age.toString()); //* 18 - string

//TODO Làm tròn số
console.log(PI.toFixed()); //* 3 - string
var x = 3000.23123123;
console.log(x.toFixed(2)); //* 3000.23
