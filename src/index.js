module.exports = function check(str, bracketsConfig) {
  if (str.length <= 1)
  return false

let matchOpen, ch
let stack = []

let openBrackets = bracketsConfig.map(pair => pair[0]);
let closeBrackets = bracketsConfig.map(pair => pair[1]);

for (let i = 0; i < str.length; i++) {
  ch = str[i]

  if (closeBrackets.indexOf(ch) > -1) {
    matchOpen = openBrackets[closeBrackets.indexOf(ch)]
    if (stack.length == 0 || (stack.pop() != matchOpen)) {
      return false
    }
  } else {
    stack.push(ch)
  }
}

return (stack.length == 0)
}
