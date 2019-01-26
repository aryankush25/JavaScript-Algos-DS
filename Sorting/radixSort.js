function getDigit(num, place) {
	while (place > 0) {
		num = Math.floor(num / 10);
		place--;
	}
	return num % 10;
}

function digitCount(num) {
	var count = 0;
	while (num > 0) {
		num = Math.floor(num / 10);
		count++;
	}
	return count;
}

function mostDigits(arr) {
	var max = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if(arr[i] > max) {
			max = arr[i];
		}
	}
	return digitCount(max);
}

function radixSort(arr) {
	let mostDigitsCount = mostDigits(arr);

	for (var i = 0; i < mostDigitsCount; i++) {
		var digitBucket = Array.from({length: 10}, () => []);

		for (var j = 0; j < arr.length; j++) {
			let digit = getDigit(arr[j], i);
			digitBucket[digit].push(arr[j]);
		}

		console.log("---------------------");
		console.log(digitBucket);
		console.log("---------------------");
		arr = [].concat(...digitBucket);
		console.log(arr);
		console.log("---------------------");
	}

	return arr;
}

var arr = [2389,54,12,98,46,72,75,91,784,37,10,50];

console.log("Before Sort: " + arr);

arr = radixSort(arr)

console.log("After Sort: " + arr);