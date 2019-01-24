function findMinIndex(arr, l) {
	var min = arr[l], index = l;
	//console.log("Next " + l + " " + min);
	for (var i = l + 1; i < arr.length; i++) {
		if (arr[i] < min) {
			index = i;
			min = arr[i];
		}
	}
	return index;
}

function swap(arr, x, y) {
	var temp = arr[x];
	arr[x] = arr[y];
	arr[y] = temp;
}

function selectionSort(arr) {
	for (var i = 0; i < arr.length - 1; i++) {
		var index = findMinIndex(arr, i + 1);
		//console.log(i + " " + (i + 1));
		if (arr[index] < arr[i]) {
			//console.log("Before: " + arr);
			swap(arr, index, i);
			//console.log("After:  " + arr);
		}
	}
}

var arr = [5,4,3,2,1,7,6];

console.log("Before Swap: " + arr);

selectionSort(arr);

console.log("After Swap: " + arr);