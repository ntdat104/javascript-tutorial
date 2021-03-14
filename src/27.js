//TODO Đối tượng Date

var date = new Date();

var year = date.getFullYear();
var month = date.getMonth() + 1; //* 0 -> 11
var day = date.getDate();

var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();

console.log(`${day}/${month}/${year}`);
console.log(`${hours}:${minutes}:${seconds}`);
