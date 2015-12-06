var Bob = function() {};

// going to make some functions that detect the following:
// what kind of punctuation does it have at the end? returns ( . ? ! )
// does it have words that are all caps?

Bob.prototype.hasLowerCase = function(str) {
  return (/[a-z]/.test(str)) ? true : false; 
}

Bob.prototype.getPunctuationMark = function(str) {
  return str.slice(-1);
}

Bob.prototype.hey = function(input) {
  if ( this.getPunctuationMark(input) === '!' &&  this.hasLowerCase(input) === false) {
    return 'Whoa, chill out!';
  } else if ( this.getPunctuationMark(input) === '?' && this.hasLowerCase(input) === false) {
    return 'Whoa, chill out!';
  } else if ( this.getPunctuationMark(input) === '?') {
    return 'Sure.';
  } else if (input) {
    return 'Whatever.';
  }
};

module.exports = Bob;
