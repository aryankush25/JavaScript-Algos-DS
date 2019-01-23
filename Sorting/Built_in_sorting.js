// Comparator Funt\ction
function stringCompareByLengthAsscending (str1, str2) {
	return str1.length - str2.length;
}

function stringCompareByLengthDesscending (str1, str2) {
	return str2.length - str1.length;
}

// if this function returns -ve value then a should come before b
// if this function returns +ve value then a should come after b

var arr = ["Aryan", "Agarwal", "Data Structures", "Algorithms"];

arr.sort(stringCompareByLengthAsscending);
console.log("String Compare Asscending: " + arr);

arr.sort(stringCompareByLengthDesscending);
console.log("String Compare Desscending: " + arr);