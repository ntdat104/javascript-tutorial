# Sự khác biệt giữa từ khóa var và let

---

## 1. Var:

- Có thể khai báo đè:

```js
var camper = "James";
var camper = "David";
```

## 2. Let (ES6):

- Không thể khai báo đè:

```js
let camper = "James";
let camper = "David"; // Lỗi
```

## 3. Bài tập:

```js
var x = 1;
```

- Dùng `var` để khai báo đè biến `x` với giá trị khởi tạo là `5`
