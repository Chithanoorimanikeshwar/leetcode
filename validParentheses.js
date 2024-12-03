// Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

// Example 3:

// Input: s = "(]"

// Output: false

// Example 4:

// Input: s = "([])"

// Output: true

var isValid = function (s) {
  let orderStack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(" || s[i] == "{" || s[i] == "[") orderStack.push(s[i]);
    else {
      switch (s[i]) {
        case "]":
          if (orderStack[orderStack.length - 1] == "[") orderStack.pop();
          else return false;
          break;
        case "}":
          if (orderStack[orderStack.length - 1] == "{") orderStack.pop();
          else return false;
          break;
        case ")":
          if (orderStack[orderStack.length - 1] == "(") orderStack.pop();
          else return false;
          break;
      }
    }
  }
  if (orderStack.length == 0) return true;
};

console.log(isValid("(]"));
