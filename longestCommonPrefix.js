// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

var longestCommonPrefix = function (strs) {
  let result = "";
  strs.sort((first, second) => first.length - second.length);
  shortestStr = strs[0];
  longestStr = strs[strs.length - 1];
  for (let i = 0; i < shortestStr.length; i++) {
    if (shortestStr[i] != longestStr[i]) return result;
    result = result.concat(shortestStr[i]);
  }
};
console.log(longestCommonPrefix( ["dog","racecar","car"]));
