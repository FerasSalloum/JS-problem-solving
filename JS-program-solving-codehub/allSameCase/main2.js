function isSameCase(word) {
  const chars = [...word];
  return chars.every(char => char === char.toUpperCase()) ||
         chars.every(char => char === char.toLowerCase());
}
