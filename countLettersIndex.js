function letterIndex(string) {
  var lettersInString = {};
  //cut out the spaces
  var array = string.replace(/\s/g, '');
  //run through the string
  for (var i = 0; i < array.length; i++) {
    //if there isnt the letter, insert it
    if (!lettersInString[array[i]]) {
      lettersInString[array[i]] = [i];
    } else {
      //add another count of the letter
      lettersInString[array[i]].push(i);
    }
  }
  return lettersInString;
}
// Test case to be changed as needed
console.log(letterIndex("lighthouse in the house"));