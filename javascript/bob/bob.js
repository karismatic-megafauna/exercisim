//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

// going to make some functions that detect the following:
// what kind of punctuation does it have at the end? returns ( . ? ! )
// does it have words that are all caps?
// empty string 

Bob.prototype.hasLowerCase = function(str) {
  (/[a-z]/.test(str)) ? true : false; 
}

Bob.prototype.hey = function(input) {
//
// YOUR CODE GOES HERE
//
  if (input) {
    return 'Whatever.';
  }
};

module.exports = Bob;
