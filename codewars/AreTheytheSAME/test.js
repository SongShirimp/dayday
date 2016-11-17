function comp(array1, array2) {
    var flag = false;
    var i;
    if (array1 === null || array2 === null || (( array1 !== null || array2 !== null ) && ( typeof array1 === "object") || (typeof array2 === 'object') )) {
        return true;
    }
        for (i = 0; i < array1.length; i++)
        {
            array2[i] = Math.sqrt(array2[i]);
        }
        for (i = 0; i < array1.length; i++)
        {
          for (var j = 0; j < array2.length; j++)
            {
              if (array1[i] === array2[j])
              {
                  array2.splice(j, 1);
                  flag = true;
              }
            }
        }
        if (array2.length !== 0)
        {
            flag = false;
        }
    return flag;
}
var A = [121, 144, 19, 161, 19, 144, 19, 11];
var B = [121, 14641, 20736, 361, 25921, 361, 20736, 361];
console.log(comp(A, B)); // true

var a = [121, 144, 19, 161, 19, 144, 19, 11];
var b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361];
console.log(comp(a, b)); // false;

a1 = [];
a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
console.log(comp(a1, a2));
b1 = [121, 144, 19, 161, 19, 144, 19, 11];
b2 = [];
console.log(comp(b1, b2));
c1 = null;
c2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
console.log(comp(c1, c2));
d1 = [121, 144, 19, 161, 19, 144, 19, 11];
d2 = null;
console.log(comp(d1, d2));
