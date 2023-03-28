function isPalindrome(word) {
  // Write your algorithm here
   // Initialize start and end indices
   let start = 0;
   let end = word.length - 1;
 
   // Iterate through the string from both ends
   while (start < end) {
     // If characters at start and end indices don't match, return false
     if (word[start] !== word[end]) {
       return false;
     }
     start++;
     end--;
   }
 
   // If all characters match, return true
   return true;
 
}

/* 
  Add your pseudocode here
   Pseudocode:
  1. Initialize start and end indices to 0 and length-1 respectively.
  2. While start index is less than end index, repeat the following:
    a. If the characters at the start and end indices are different, return false.
    b. Increment start index and decrement end index.
  3. If all characters match, return true.
*/

/*
  Add written explanation of your solution here
   Explanation:
  The function takes a string as an argument and iterates through it from both ends. If the characters at the start and end indices don't match, it returns false, indicating that the string is not a palindrome. If it makes it through the entire string without finding any non-matching characters, it returns true, indicating that the string is a palindrome.
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

module.exports = isPalindrome;
