/* jshint esversion:6 */
function letterIndex(string) {
  var lettersInString = {};
  for (var i = 0; i < string.length; i++) {
    const char = string[i];
    if (char === " ") {
      continue; // eslint-disable-line no-continue
    }

    if (!lettersInString[char]) {
      lettersInString[char] = [];
    }
    lettersInString[char].push(i);
  }
  return lettersInString;
}
// Test case to be changed as needed
console.log(letterIndex("lighthouse in the house"));