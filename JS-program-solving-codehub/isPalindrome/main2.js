function isPalindrome(s) {
  const cleaned = s.toLowerCase().replace(/[^\w]/g, '');
  let left = 0, right = cleaned.length - 1;

  while (left < right) {
    if (cleaned[left] !== cleaned[right]) return false;
    left++;
    right--;
  }

  return true;
}
