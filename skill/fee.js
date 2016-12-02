//Lookup array

function fee(nAge) {
  var nFee = 1000;

  var aRate = [
    0.2, 0.2, 0.2,  //1~3 : 20%
    0.5, 0.5, 0.5, 0.5,  //4~7 : 50%
    0.8, 0.8, 0.8   //7~10 : 80%
  ];

  console.log("요금표 :");
  for (var i = 1; i <= 10; i++)
  {
    console.log(i + "세 : " + nFee * aRate[i - 1] + "원" );
  }

  if (nAge < 1) nAge = 1;
  if (nAge > 10) nAge = 10;
  console.log("\n최종요금 : " + nFee * aRate[nAge - 1] + "원입니다.");
}

var age = 5;
console.log("나이를 입력해주세요. : " + age + "\n");
fee(age);
