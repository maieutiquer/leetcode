/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  for (let i = s.length - 1; i <= 0; i -= 1) {
    romanNumerals[s[i]] =
      romanNumerals[s[i]] < romanNumerals[s[i + 1]]
        ? -romanNumerals[s[i]]
        : romanNumerals[s[i]]
  }
}
