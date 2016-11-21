function recursive(n, c) {return c ? c.call(c, n) : n;}
function zero(c) {return recursive(0, c);}
function one(c) {return recursive(1, c);}
function two(c) {return recursive(2, c);}
function three(c) {return recursive(3, c);}
function four(c) {return recursive(4, c);}
function five(c) {return recursive(5, c);}
function six(c) {return recursive(6, c);}
function seven(c) {return recursive(7, c);}
function eight(c) {return recursive(8, c);}
function nine(c) {return recursive(9, c);}

function plus(x) {return function(n) {return n + x;};}
function minus(x) {return function(n) {return n - x;};}
function times(x) {return function(n) {return n * x;};}
function dividedBy(x) {return function(n) {return n / x;};}
 
console.log(seven(times(five()))); // must return 35
console.log(four(plus(nine()))); // must return 13
console.log(eight(minus(three()))); // must return 5
console.log(six(dividedBy(two()))); // must return 3
