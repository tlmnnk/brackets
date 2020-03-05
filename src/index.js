module.exports = function check(str, bracketsConfig) {

  let configArr = bracketsConfig.map(item => item.join(''));
  let length;
  do {
      length = str.length;
      for (let i = 0; i < configArr.length; i++) {
          str = str.replace(configArr[i], '');
          console.log(str);
      }
  } while (length !== str.length);

  return !str.length;
};