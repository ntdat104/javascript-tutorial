# Khai báo một Biến Chỉ Đọc với Từ khoá const

---

## 1. Const (ES6):

- Từ khóa `const` cũng giống với `let` không thể khai báo đè.
- Tuy nhiên, khi dùng `let` để khai báo thì có thể thay đổi giá trị của biến đó.
- Còn đối với `const` thì biến đó chỉ được phép đọc, không thể thay đổi giá trị.
- Khi khai báo với từ khóa `const` thì phải khởi tạo giá trị kèm ngay khi khai báo.

```js
const FAV_PET = "Cats";
FAV_PET = "Dogs"; // Lỗi
```

## 2. Bài tập:

```js
var fCC = "freeCodeCamp";
var fact = "is cool!";

fact = "is awesome!";
console.log(fCC, fact);
```

- Sử dụng từ khóa `let` và `const` thay cho từ khóa `var`
