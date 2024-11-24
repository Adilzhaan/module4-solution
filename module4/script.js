// ******************************* 
// START HERE IF YOU WANT AN EASIER STARTING POINT FOR THIS ASSIGNMENT
// *******************************

// Module 4 Assignment Instructions.

// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:
// Hello Yaakov
// Good Bye John
// Good Bye Jen
// Good Bye Jason
// Hello Paul
// Hello Frank
// Hello Larry
// Hello Paula
// Hello Laura
// Good Bye Jim

(function () {

  // Declare the array of names
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  
  // STEP 1: Create helloSpeaker object
  var helloSpeaker = {
    speak: function (name) {
      console.log("Hello " + name);
    }
  };
  
  // STEP 2: Create byeSpeaker object
  var byeSpeaker = {
    speak: function (name) {
      console.log("Good Bye " + name);
    }
  };
  
  // STEP 10: Loop over the names array and say either 'Hello' or "Good Bye"
  for (var i = 0; i < names.length; i++) {
  
    // STEP 11: Retrieve the first letter of the current name in the loop
    var firstLetter = names[i].charAt(0).toLowerCase();
  
    // STEP 12: Compare the 'firstLetter' to 'j'. Call the appropriate speak method
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
  
  })();
  