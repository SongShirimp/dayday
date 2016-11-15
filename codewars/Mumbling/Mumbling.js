/*Description:

This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd");    // "A-Bb-Ccc-Dddd"
accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt");    // "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.*/
function accum(s) {
  var temp = s.split('');
  var res = "";

  for (var i = 0; i < temp.length; i++)
  {
    temp[i] = temp[i].toUpperCase();
    for (var j = 0; j <= i; j++)
    {
      res += temp[i];
      temp[i] = temp[i].toLowerCase();
    }

    if (i < temp.length - 1)
    {
      res += "-";
    }
  }
  return res;
}


console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));
