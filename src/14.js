//TODO Hiểu hơn về câu lệnh điều kiện và phép so sánh

var result = "A" && "B" && "C";

console.log(result); //* Expect: C

//? Giải thích
/*
 * Đọc từ vế trái sang vế phải
 * Nếu gặp giá trị khác với giá trị trước đó
 * Thì sẽ lấy giá trị đó và gán ngược lại
 */

result = "A" && null && "C";
console.log(result); //* Expect: null

result = "A" || "B" || "C" || "D";
console.log(result); //* Expect: A
//? Giải thích
/*
 * Đọc từ vế trái sang vế phải
 * Nếu true thì lấy luôn
 */
