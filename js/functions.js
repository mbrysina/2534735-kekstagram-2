function isLengthValid(str , maxLength) {
  return str.length <= maxLength;
}

function isPalindrome(str) {
  const cleanedStr = str.toLowerCase().replaceAll(' ', '');
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
}
isPalindrome('Топот');
