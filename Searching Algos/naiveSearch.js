function naiveSearch(long, short) {
	var count = 0;
	for (var i = 0; i < long.length; i++) {
		for (var j = 0; j < short.length; j++) {
			if (long[i + j] !== short[j]) {
				break;
			}
			if (j === short.length - 1) {
				count++;
			}
		}
	}
	return count;
}

var count = naiveSearch("lolololrie loled", "lol");
console.log("Count: " + count);