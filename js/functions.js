function length(str, maxLength) {
  return str <= maxLength;
  }

function isPalindrome(str) {const cleanedStr = str.replace(/\s+/g, '').toLowerCase();
      return cleanedStr === cleanedStr.split('').reverse().join('');
  }
