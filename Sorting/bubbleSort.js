function swap(arr, i1, i2) {
	var temp = arr[i1];
	arr[i1] = arr[i2];
	arr[i2] = temp;
}

function bubbleSort(arr) {
	for (var i = 0; i < arr.length - 1; i++) {
		for (var j = 0; j < arr.length - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				swap(arr, j, j + 1);
			}
		}
	}
}

var arr = [2, 1, 5, 9, 4, 5, 10, 1, 3];

console.log("Before Swap: " + arr);

bubbleSort(arr);

console.log("After Swap: " + arr);