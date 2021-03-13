/*
 * If - else
 */

var isSuccess = 1 > 2;

if (isSuccess) {
	console.log("Điều kiện đúng");
} else {
	console.log("Điều kiện sai"); //! Chạy
}

/*
 * 0
 * false
 * '' - ""
 * undefined
 * NaN
 * null
 * 6 giá trị trên khi convert sang boolean sẽ thành false
 */

var fullName = "Tien Dat";

if (fullName) {
	console.log("Điều kiện đúng"); //! Chạy
} else {
	console.log("Điều kiện sai");
}
