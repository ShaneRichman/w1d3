function countLetters(string) {
  var lettersInString = {};
  //cut out the spaces
  var array = string.replace(/\s/g, '');
  //run through the string
  for (var i = 0; i < array.length; i++) {
    var j = 0;
    //if there isnt the letter, insert it
    if (!lettersInString[array[i]]) {
      lettersInString[array[i]] = 1;
    } else {
      //add another count of the letter
      lettersInString[array[i]] += 1;
    }
  }
  return lettersInString;
}

console.log(countLetters("lighthouse in the house"));