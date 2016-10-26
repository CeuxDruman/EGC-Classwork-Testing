function testSum2Num() {
	status = "OK";
	if (sum(4, 2) != 6) {
		status = "FAIL";
	}
	return status;
}

function testSumWithZero() {
	status = "OK";
	if (sum(3, 0) != 3) {
		status = "FAIL";
	}
	if (sum(0, 3) != 3) {
		status = "FAIL";
	}
	return status;
}


function testSumWithNeg() {
	status = "OK";
	if (sum(6, -2) != 4) {
		status = "FAIL";
	}
	if (sum(-2, 6) != 4) {
		status = "FAIL";
	}
	if (sum(-3, -4) != -7) {
		status = "FAIL";
	}
	return status;
}

function sum(a, b) {
	return sumar(a, b);
}

function testIt() {
	document.write("testSum2Num: " + testSum2Num());
	document.write("\ntestSumWithZero: " + testSumWithZero());
	document.write("\ntestSumWithNeg: " + testSumWithNeg());
}

testIt();