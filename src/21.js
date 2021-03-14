//TODO Return trong hàm

var isConfirm = confirm("Message?");
console.log(isConfirm);

function sum(a, b, ...args) {
	console.log(args);
	var result = a + b;
	for (var param of args) {
		result += param;
	}
	return result;
}

var result = sum(2, 4, 4, 2, 1, 3, 5);
console.log(result);
