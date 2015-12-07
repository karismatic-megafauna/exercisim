var Bob = function() {
};

// going to make some functions that detect the following:
// what kind of punctuation does it have at the end? returns ( . ? ! )
// does it have words that are all caps?

Bob.prototype.hasLowerCase = function(str) {
  return (/[a-z]/.test(str)) ? true : false;
}

Bob.prototype.getLastChar = function(str) {
  return str.slice(-1);
}

Bob.prototype.hey = function(input) {
  var question = 0;
  var statement = 0;
  var exclimation = 0;
  var isNumber = 0;

  input.split('').map(function(obj){
    if (obj === '?'){
      question = question + 1;
    }
    if (obj === '!'){
      exclimation = exclimation + 1;
    }
    if ( obj === '.') {
      statement = statement + 1;
    }
    if ( /^\d+$/.test(obj) ) {
      isNumber = isNumber + 1;
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
  } else if (input) {
    return 'Whatever.';
  }
};

module.exports = Bob;
