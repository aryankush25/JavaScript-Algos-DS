function insertionSort(arr) {

	for (var i = 1; i < arr.length; i++) {
		
		var index = 0, flag = 0;

		for (var j = 0; j < i; j++) {
			if (arr[i] < arr[j]) {
				index = j;

				var temp = arr[i];

				for (var j = i; j > index; j--) {
					arr[j] = arr[j - 1];
				}
				arr[index] = temp;
				
				break;
			}
		}
	}
}

var arr = [2389,54,12,98,46,72,75,91,784,37,10,50];

console.log("Before Swap: " + arr);

insertionSort(arr);

console.log("After Swap: " + arr);