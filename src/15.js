//TODO Chuỗi trong Javascript

/*
 * 1. Tạo chuỗi
 * - Các cách tạo chuỗi
 * - Nên dùng cách nào? Lý do?
 * - Kiểm tra data type
 *
 * 2. Một số case sử dụng backslash (\)
 * 3. Xem độ dài chuỗi
 * 4. Chú ý độ dài khi viết code
 * 5. Template string ES6
 */

var fullName = "Tiến Đạt";
var fullName2 = new String("Tiến Đạt");

console.log(typeof fullName); //* String
console.log(typeof fullName2); //* Object
//! Nên dùng cách số 1

var fullName3 = 'Tôi là "Tiến Đạt" \\';
console.log(fullName3);

var fullName4 = "Tiến Đạt";
console.log(fullName4.length);

var firstName = "Đạt";
var lastName = "Nguyễn";
console.log(`${firstName} ${lastName}`);
