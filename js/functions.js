function isLengthValid(str , maxLength) {
  return str <= maxLength;
  }

  function isPalindrome(str) {
    const cleanedStr = text.replaceAll(' ', '');
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
  }
