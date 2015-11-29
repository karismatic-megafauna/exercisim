var Triangle = function(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
};

Triangle.prototype.kind = function() {
  var sides = [this.a, this.b, this.c];

  var ab = this.a + this.b;
  var bc = this.b + this.c;
  var ac = this.a + this.c;
  
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

  // Triangle Inequality
  if ( ab < this.c || bc < this.a || ac < this.b ) {
    throw 'Violates Triangel Inequality';
  }

  // Types of triangles 
  if ( this.a === this.b && this.b === this.c ) {
   return 'equilateral';
  } else if ( this.a !== this.b && this.b === this.c ) {
    return 'isosceles';
  } else if ( this.a !== this.b && this.a === this.c ) {
    return 'isosceles';
  } else if ( this.a !== this.c && this.a === this.b ) {
    return 'isosceles';
  } else if ( this.a !== this.c && this.a !== this.b ) {
    return 'scalene';
  } else {
    throw 'Cool, you found a new type of triangle!';
  }
};

module.exports = Triangle;
