var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(dna) {
  dnaToRna = {
    'C': 'G',
    'G': 'C',
    'A': 'U',
    'T': 'A',
  };
  return dna.split('').map(function(nucleotide) {
    return dnaToRna[nucleotide];
  }).join('');
};

DnaTranscriber.prototype.toDna = function(rna) {
  rnaToDna = {
    'G': 'C',
    'C': 'G',
    'U': 'A',
    'A': 'T',
  }
  return rna.split('').map(function(nucleotide) {
    return rnaToDna[nucleotide];
  }).join('');
};
module.exports = DnaTranscriber;
