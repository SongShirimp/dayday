function iqTest(numbers) {
    var some = numbers.split(' ');
    var oddCount = 0;
    var evenCount = 0;
    var even,
        odd;

    for (var i = 0; i < some.length; i++) {
        if (some[i] % 2 === 0) {
            evenCount ++;
            even = i + 1;
        }
        if (some[i] % 2 !== 0) {
            oddCount ++;
            odd = i + 1;
        }
    }

    if (evenCount > 1) {
        return odd;
    }
    if (oddCount > 1) {
        return even;
    }
}

var test = "2 4 5 8 10"; //odd num is third;
var test2 = "3 5 7 8"; // even num is second;
console.log(iqTest(test));
console.log(iqTest(test2));
