function linearSearch(arr, val) {
    for(var i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return false;
}

function binarySearch(arr, val) {
    var l = 0, r = arr.length - 1, mid = Math.floor((l + r) / 2);

    while(l <= r) {
        if (arr[mid] === val) {
            return mid;
        } else if (arr[mid] > val) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
        mid  = Math.floor((l + r) / 2);
    }
    return -1;
}

function binarySR(arr, val, l, r) {
    if (l > r) {
        return -1;
    }

    var mid  = Math.floor((l + r) / 2);

    if (arr[mid] === val) {
        return mid;
    } else if(arr[mid] > val) {
        r = mid - 1;
    } else {
        l = mid + 1;
    }
    return binarySR(arr, val, l, r);
}

function binaryS(arr, val) {
    return binarySR(arr, val, 0, arr.length - 1);
}

var l = linearSearch([1,4,7,8,9,10,22,33,44,55,66,77,88,99,100,123,135,145,167,178,189,190], 1);
console.log(`Linear Search: ${l}`);

var b = binarySearch([1,4,7,8,9,10,22,33,44,55,66,77,88,99,100,123,135,145,167,178,189,190], 1);
console.log(`Binary Search: ${b}`);

var BR = binaryS([1,4,7,8,9,10,22,33,44,55,66,77,88,99,100,123,135,145,167,178,189,190], 1);
console.log(`Binary Search Recurssion: ${BR}`);