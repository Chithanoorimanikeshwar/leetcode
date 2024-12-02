// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
var romanToInt = function (s) {
  let romanNum = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let finalInt = 0;
  for (let temp = 0; temp < s.length; temp++) {
    let left = s[temp];
    let adjLeft = s[temp + 1];
    if (romanNum[left] >= romanNum[adjLeft] || !adjLeft) {
      finalInt += romanNum[left];
    } else {
      finalInt += romanNum[adjLeft] - romanNum[left];
      temp += 1;
    }
  }
  return finalInt;
};
romanToInt("MCMXCIV");
