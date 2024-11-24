// STEP 2: Wrap the entire contents inside an IIFE
(function () {

  // STEP 3: Create 'helloSpeaker' object
  var helloSpeaker = {};

  // STEP 4: Attach the 'speak' function to 'helloSpeaker'
  var speakWord = "Hello";

  helloSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
  };

  // STEP 5: Expose the 'helloSpeaker' object to the global scope
  window.helloSpeaker = helloSpeaker;

})();
