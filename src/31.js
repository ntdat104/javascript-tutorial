//TODO Vòng lặp - Loop

/*
 * 1. for - Lặp với điều kiện đúng
 * 2. for/in - Lặp qua key của đối tượng - Object
 * 3. for/of - Lặp qua value của đối tượng - Array
 * 4. while - Lặp khi điều kiện đúng
 * 5. do/while - Lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng
 */

//TODO For loop
for (var i = 0; i < 10; i++) {
	console.log(i);
}

//TODO For/in
var myInfo = {
	name: "Tiến Đạt",
	age: 21,
	isMale: true,
};
console.log(Object.keys(myInfo));
console.log(Object.values(myInfo));

for (var key in myInfo) {
	console.log(`${key}: ${myInfo[key]}`);
}

//TODO For/of
var nums = [0, 1, 2, 3, 4, 5];

for (var num of nums) {
	console.log(num);
}

//TODO While loop
var x = 0;
while (x < 4) {
	console.log(x);
	x++;
}

//TODO do/while loop
var y = 0;

do {
	console.log(y);
	y++;
} while (y < 5);
