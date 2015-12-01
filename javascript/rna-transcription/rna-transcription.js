var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(dna) {
  // set up a map of values
  rnaVals = {
    'C': 'G'
  }
  // map through the string ( turn string into array )
  return dna.split('').map(function(val) {
    // compare val to rnaVals 
  });
};

DnaTranscriber.prototype.toDna = function(rna) {
  // code
};
module.exports = DnaTranscriber;
