module.exports = function check(str, bracketsConfig) {
if (str.length <= 1)
      return false;

    let openBrackets = bracketsConfig.map(pair => pair[0]);
    let closeBrackets = bracketsConfig.map(pair => pair[1]);

    let strArr = str.split('');

    function rec(arr) {

      if (!arr.length) {
        return true
      }

      for (let i = 0; arr.length > i; i++ ) {
        let matchClose = closeBrackets[openBrackets.indexOf(arr[i])];
        if (arr[i+1] && arr[i+1] === matchClose) {
          arr.splice(i, 2);
          return rec(arr);
        }
      }
      return false;
    }

    return rec(strArr)
}
