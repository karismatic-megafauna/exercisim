var Triangle = function(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
};

Triangle.prototype.kind = function() {
  console.log('\n a: ' + this.a);
  console.log('\n b: ' + this.b);
  console.log('\n c: ' + this.c);
  if ( this.a === this.b && this.b === this.c ) {
   return 'equilateral';
  } else if ( this.a !== this.b && this.b === this.c ) {
    return 'isosceles';
  } else if ( this.a !== this.b && this.a === this.c ) {
    return 'isosceles';
  } else if ( this.a !== this.c && this.a === this.b ) {
    return 'isosceles';
  }
};

module.exports = Triangle;
