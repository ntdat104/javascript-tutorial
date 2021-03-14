//TODO Một số điều cần biết về function

/*
 * 1. Khi function đặt trùng tên?
 * 2. Khai báo biến trong hàm?
 * 3. Định nghĩa hàm trong hàm?
 */

//TODO Khi function đặt trùng tên
function showMessage() {
	console.log("Hello 1");
}

function showMessage() {
	console.log("Hello 2");
}

function showMessage() {
	console.log("Hello 3");
}

showMessage(); //* Hello 3

//TODO Khai báo biến trong hàm
function showInfo() {
	var fullName = "Tiến Đạt";
	console.log(fullName);
}

showInfo();

//TODO Hàm trong hàm
function run() {
	function run1() {
		console.log("Run 1");
	}
	run1();
}

run();
