function isLengthValid(str , maxLength) {
  return str.length <= maxLength;
}
console.log(isLengthValid('проверяемая строка', 20)); // true
console.log(isLengthValid('проверяемая строка', 18)); // true
console.log(isLengthValid('проверяемая строка', 10)); // false

function isPalindrome(str) {
  const cleanedStr = str.toLowerCase().replaceAll(' ', '');
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
}
