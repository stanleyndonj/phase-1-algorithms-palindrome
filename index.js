function isPalindrome(word) {
  // Write your algorithm here
  //Look at the string input and return true if the word read both backwards and forwards it is the same.
  let letters = word.split("");

   let backwards = ""
   for (i= letters.length -1; i>=0; i--){
    backwards += letters[i];
}



if(word.toLowerCase() == backwards.toLowerCase()){
  return true;
}
else{
  return false;
};
}


/* 
  Add your pseudocode here
  let input be a string 
  If the word remains the same when read both backwards and forwards, then return true.
  If it does not, return false.
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPali
