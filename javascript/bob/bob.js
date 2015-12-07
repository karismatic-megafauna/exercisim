var Bob = function() {
  this.question = 0;
  this.statement = 0;
  this.exclimation = 0;
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
  var inputArry = input.split('').reduce(function(mem, obj){
    //
    // if (obj === ' '){
    //   return mem 
    // }
    return mem + obj;
  });
  console.log(inputArry, "-----------")
  if ( this.getLastChar(input) === '!' &&  this.hasLowerCase(input) === false) {
    return 'Whoa, chill out!';
  } else if ( this.getLastChar(input) === '?' && this.hasLowerCase(input) === false) {
    return 'Whoa, chill out!';
  } else if ( this.getLastChar(input) === '?') {
    return 'Sure.';
  } else if (input) {
    return 'Whatever.';
  }
};

module.exports = Bob;
