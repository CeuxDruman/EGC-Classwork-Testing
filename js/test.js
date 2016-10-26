function testSum2Num() {
	if (sum(4, 2) != 6) {
		alert("Error")
	}
}

function testSumWithZero() {
	if (sum(3, 0) != 3) {
		alert("Error")
	}
	if (sum(0, 3) != 3) {
		alert("Error")
	}
}

function sum(a, b) {
	return a+b;
}

testSum2Num();
testSumWithZero();