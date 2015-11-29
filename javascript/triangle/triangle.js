var Triangle = function(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
};

Triangle.prototype.isEquilateral = function() {
  return (this.a === this.b && this.b === this.c) ? 'equilateral' : false;
}

Triangle.prototype.isScalene = function(){
  return (this.a !== this.b && this.b !== this.c) ? 'scalene' : false;
}

Triangle.prototype.isIsosceles = function(){
  return (
    this.a !== this.b && this.b === this.c ||
    this.a !== this.b && this.a === this.c ||
    this.a !== this.c && this.a === this.b
  ) ? 'isosceles' : false;
}

Triangle.prototype.isValidTriangle = function(){
  // Triangle Inequality
  var ab = this.a + this.b;
  var bc = this.b + this.c;
  var ac = this.a + this.c;

  if ( ab < this.c || bc < this.a || ac < this.b ) {
    throw 'Violates Triangle Inequality';
  }
  return true;
}

Triangle.prototype.isPositive = function(){
  var sides = [this.a, this.b, this.c];

  // No negative numbers and total
  var total = sides.reduce(function(mem, obj){
    if (Math.sign(obj) === -1){
      throw 'No negative numbers';
    }
    return mem + obj;
  });

  if ( total === 0 ) {
    throw 'Triangle should be greater than zero';
  }

  return true;
}

Triangle.prototype.kind = function() {

  this.isValidTriangle();
  this.isPositive();

  var typeChecks = [
    'isEquilateral',
    'isIsosceles',
    'isScalene',
  ];
  var type = typeChecks.reduce(
    function(memo, isType) {
      return memo = memo || this[isType]()
    }.bind(this),
    ''
  );
  return type;
};

module.exports = Triangle;
