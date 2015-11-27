var Triangle = function() {};

Triangle.prototype.kind = function sides(a, b, c) {
  if ( a === b && b === c ) {
   return 'equilateral';
  } else if ( a === b && a !== c ) {
    return 'isosceles';
  }
};

module.exports = Triangle;
