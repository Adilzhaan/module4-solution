// STEP 6: Wrap the entire contents inside an IIFE
(function () {

  // STEP 7: Create 'byeSpeaker' object
  var byeSpeaker = {};

  // STEP 8: Attach the 'speak' function to 'byeSpeaker'
  var speakWord = "Good Bye";

  byeSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
  };

  // STEP 9: Expose the 'byeSpeaker' object to the global scope
  window.byeSpeaker = byeSpeaker;

})();
