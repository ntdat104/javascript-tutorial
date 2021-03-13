//TODO Làm việc với Array

//* Keyword: Javascript array method

/*
 * 1. To string
 * 2. Join
 * 3. Pop
 * 4. Push
 * 5. Shift
 * 6. Unshift
 * 7. Splice
 * 8. Concat
 * 9. Slice
 */

var languages = ["Javascript", "PHP", "Ruby"];

//* To string
// console.log(languages.toString()); //* Javascript,PHP,Ruby

//* Join
// console.log(languages.join("|")); //* Javascript|PHP|Ruby

//* Pop
// console.log(languages.pop()) //* Xóa element cuối mảng và trả về phần tử đã xóa

//* Push
// console.log(languages.push("Dart", "Java")) //* thêm 1 hoặc nhiều element vào cuối mảng và trả về độ dài của mảng

//* Shift
// console.log(languages.shift()) //* Xóa element đầu mảng và trả về phần tử đã xóa

//* Unshift
// console.log(languages.push("Dart", "Java")) //* thêm 1 hoặc nhiều element vào đầu mảng và trả về độ dài của mảng

//* Splice
// languages.splice(1, 1);
// console.log(languages); //* ["Javascript", "Ruby"]

// languages.splice(1, 0, "Dart");
// console.log(languages); //* ["Javascript", "Dart", "Ruby"]

//* Concat
var language2 = ["Dart", "Java"];
console.log(languages.concat(language2)); //* ["Javascript", "PHP", "Ruby", "Dart", "Java"]

//* Slice
console.log(languages.slice(1, 2)); //* ["PHP"]
console.log(languages.slice(0)); //* ["Javascript", "PHP", "Ruby"] - copy mảng
