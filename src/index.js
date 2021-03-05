module.exports = function check(str, bracketsConfig) {
  let arr = [];
  for (let i = 0; i < str.length; i += 1) {

    for (let k = 0; k < bracketsConfig.length; k += 1) {

      if ((str[i] === bracketsConfig[k][0]) && (str[i] === bracketsConfig[k][1])) {

        if (str[i] === arr[arr.length - 1]) {
          arr.pop();
        } else {
          arr.push(str[i]);
        }
      }

      if (str[i] === bracketsConfig[k][0]) {
        arr.push(str[i]);
      }

      if (str[i] === bracketsConfig[k][1]) {
        if (arr[arr.length - 1] === bracketsConfig[k][0]) {
          arr.pop();
        } else {
          return false;
        }
      }
    }
  }

  return arr.length === 0;
}
