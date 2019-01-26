function swap(arr, i, j) {
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

function piviot(arr, l, r) {
	let piviot = arr[l];
	var piviotIndex = l;

	for (var i = l + 1; i <= r; i++) {
		if (piviot > arr[i]) {
			piviotIndex++;
			swap(arr, piviotIndex, i);
		}
	}

	swap(arr, l, piviotIndex);

	return piviotIndex;
}

function quickSort(arr, l = 0, r = arr.length - 1) {
	if (l < r) {

		// console.log("----------------------------------");
		// console.log("arr " + "[" + arr + "]");
		var index = piviot(arr, l, r);
		// console.log("l " + l + " r " + r);
		// console.log("piviotIndex " + index + " piviot " + arr[index]);
		// console.log("arr " + "[" + arr + "]");
		// console.log("----------------------------------");

		quickSort(arr, l, index - 1);
		quickSort(arr, index + 1, r);
	}
}

var arr = [2389,54,12,98,46,72,75,91,784,37,10,50];

console.log("Before Sort: " + arr);

quickSort(arr)

console.log("After Sort: " + arr);