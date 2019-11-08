function characterCount(string) {
  const dict = {};

  string.replace(/\s/, '').split('').forEach(char => {
    if (dict[char]) {
      dict[char]++;
    } else {
      dict[char] = 1;
    }
  });

  return dict;
}