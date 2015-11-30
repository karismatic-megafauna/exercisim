var Hamming = function() {};

Hamming.prototype.compute = function(strand1, strand2) {
  // convert to arrays, set vars
  var sArry1 = strand1.split('');
  var sArry2 = strand2.split('');
  var count = 0;

  // check if lengths are not equal
  if ( sArry1.length !== sArry2.length ) {
    throw new Error('DNA strands must be of equal length.')
  }

  // Map over either array as they are same length and check differences
  // Also, i don't know if i like how i am using map here
  sArry1.map(function(obj, ind) {
    if (sArry1[ind] !== sArry2[ind]) {
      count = count + 1;
    }
  });
  return count;
};

module.exports = Hamming;
