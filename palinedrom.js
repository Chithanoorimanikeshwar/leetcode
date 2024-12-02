// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
var isPalindrome = function (x) {
  let numStack = [];
  if (x < 0) {
    return false;
  }
  while (x != 0) {
    numStack.push(x % 10);
    x = Math.floor(x / 10);
  }
  console.log(numStack);
  let left = 0;
  let right = numStack.length - 1;
  while (left <= right) {
    console.log("ok");
    if (numStack[left] == numStack[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome(10));
