/*Build Tower

Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as *

Python: return a list;
JavaScript: returns an Array;
C#: returns a string[];
PHP: returns an array;
C++: returns a vector<string>;
Haskell: returns a [String];
Have fun!

for example, a tower of 3 floors looks like below

[
  '  *  ',
  ' *** ',
  '*****'
]
and a tower of 6 floors looks like below

[
  '     *     ',
  '    ***    ',
  '   *****   ',
  '  *******  ',
  ' ********* ',
  '***********'
]
*/
function Space(n, j) {
  var x = n.length;
  n.splice(j - 1, 1, " ");
  n.splice(x - j, 1, " ");
  return n = n.join('');
}

function towerBuilder(nFloor) {
  var res = [];
  var firstFloor = [];
  for (var i = 0 ; i < nFloor * 2 - 1; i++) {
    firstFloor.push("*");
  }
  res[0] = firstFloor.join('');
  for (var j = 1; j < nFloor; j++) {
    res.push(Space(firstFloor, j));
  }
  return res.reverse();
}
console.log(towerBuilder(10));
