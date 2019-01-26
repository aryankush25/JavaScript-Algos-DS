function mergeSortedArray(arr1, arr2) {
	var arr = [];
	var i = 0, j = 0;

	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] < arr2[j]) {
			arr.push(arr1[i]);
			i++;
		} else {
			arr.push(arr2[j]);
			j++;
		}
	}

	while (i < arr1.length) {
		arr.push(arr1[i]);
		i++;
	}

	while (j < arr2.length) {
		arr.push(arr2[j]);
		j++;
	}

	return arr;
}

function mergeSort(arr) {

	if (arr.length === 1) {
		return arr;
	}

	var arr1 = [], arr2 = [];
	var n = Math.floor(arr.length / 2);

	for (var i = 0; i < n; i++) {
		arr1.push(arr[i]);
	}
	for (var i = n; i < arr.length; i++) {
		arr2.push(arr[i]);
	}

	// console.log("----------------------------------");
	// console.log("arr1 " + "[" + arr + "]");
	// console.log("arr1 " + "[" + arr1 + "]");
	// console.log("arr2 " + "[" + arr2 + "]");
	// console.log("----------------------------------");

	arr1 = mergeSort(arr1);
	arr2 = mergeSort(arr2);

	arr = mergeSortedArray(arr1, arr2);
	return arr;
}

var arr = [2389,54,12,98,46,72,75,91,784,37,10,50];

console.log("Before Sort: " + arr);

arr = mergeSort(arr);

console.log("After Sort: " + arr);