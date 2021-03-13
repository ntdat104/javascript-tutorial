//TODO Làm việc với chuỗi

//* Keyword: Javascript string methods

var myString = "Học JS tại F8!";

// 1. Length
console.log(myString.length); //* 13

// 2. Find index
console.log(myString.indexOf("JS")); //* 4

// 3. Cut string
console.log(myString.slice(4)); //* JS tại F8!
console.log(myString.slice(4, 6)); //* JS

// 4. Replace
console.log(myString.replace("JS", "Javascript")); //* Học Javascript tại F8!
//! Chỉ thay thế chữ JS đầu tiên

console.log(myString.replace(/JS/g, "Javascript")); //* Học Javascript tại F8!
//! Thay thế tất cả các chữ JS

// 5. Convert to upper case
console.log(myString.toUpperCase()); //* HỌC JS TẠI F8!

// 6. Convert to lower case
console.log(myString.toLowerCase()); //* học js tại f8!

// 7. Trim
myString += "  ";
console.log(myString.trim()); //* Học JS tại F8!

// 8. Split
var languages = "Javascript, PHP, Ruby";
console.log(languages.split(", ")); //* ["Javascript", "PHP", "Ruby"]

// 9. Get a character by index
var myString2 = "Tiến Đạt";
console.log(myString2.charAt(5)); //* Đ
console.log(myString2[5]); //* Đ
