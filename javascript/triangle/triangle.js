var Triangle = function(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
};

Triangle.prototype.kind = function() {
  var total = this.a + this.b + this.c;
  console.log('\n a: ' + this.a);
  console.log('\n b: ' + this.b);
  console.log('\n c: ' + this.c);
  console.log('\n total: ' + total);
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
  } else if ( total === 0 ) {
    throw 'Triangle must be larger than 0';
  }
};

module.exports = Triangle;
