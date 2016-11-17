/*Description:

Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

Examples :

iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd*/

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
var test2 = "3 5 7 8"; // even num is fourth;
console.log(iqTest(test));
console.log(iqTest(test2));
