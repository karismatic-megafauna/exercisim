var Bob = function() {
};

// going to make some functions that detect the following:
// what kind of punctuation does it have at the end? returns ( . ? ! )
// does it have words that are all caps?

// try coverting toUppperCase() instead of checking for lower case, this might
// fix your weird issue with uuuuummmlots
Bob.prototype.hasLowerCase = function(str) {
  return (/[a-z]/.test(str)) ? true : false;
}

Bob.prototype.getLastChar = function(str) {
  return str.slice(-1);
}

Bob.prototype.hey = function(input) {
  var isNumber = 0;
  var silence = 0;

  input.split('').map(function(obj){
    if ( obj === ' ') {
      silence++;
    }
    if ( /^\d+$/.test(obj) ) {
      isNumber++;
    }
  });

  if ( this.getLastChar(input) === '!' &&  this.hasLowerCase(input) === false) {
    return 'Whoa, chill out!';
  } else if ( (input.length - 1 === isNumber )) {
    return 'Sure.';
  } else if ( this.getLastChar(input) === '?' && this.hasLowerCase(input) === false) {
    return 'Whoa, chill out!';
  } else if ( this.getLastChar(input) === '?') {
    return 'Sure.';
  } else if ( input.length === silence) {
    return 'Fine. Be that way!';
  } else if (input) {
    return 'Whatever.';
  }

};

module.exports = Bob;
