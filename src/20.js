//TODO Tham số trong hàm

/*
 * 1. Tham số
 * - Định nghĩa?
 * - Kiểu dữ liệu?
 * - Tính private?
 * - 1 tham số
 * - Nhiều tham số
 *
 * 2. Truyền tham số
 * - 1 tham số
 * - Nhiều tham số
 *
 * 3. Arguments?
 * - Đối tược arguments
 * - Giới thiệu vòng for of
 */

function writeLog(message) {
	console.log(message);
}

writeLog("Đây là 1 dòng code");

function writeLog2() {
	console.log(arguments);
	for (var param of arguments) {
		console.log(param);
	}
}

writeLog2("Log 1", "Log 2", "Log 3");
