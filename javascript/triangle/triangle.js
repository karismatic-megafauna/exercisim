var Triangle = function(a, b, c) {
  this.triangleType = 'na';
  this.a = a;
  this.b = b;
  this.c = c;
};

Triangle.prototype.isEquilateral = function(){
  if(this.a === this.b && this.b === this.c){
    this.triangleType = 'equilateral';
    return this.triangleType;
  }
  return false;
}

Triangle.prototype.isScalene= function(){
  if(this.a !== this.b && this.b !== this.c){
    this.triangleType = 'scalene';
    return this.triangleType;
  }
  return false;
}

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
    throw 'Violates Triangle Inequality';
  }

  // Check triangles
  // order matters, i wonder if i can make that not a thing
  this.isEquilateral();
  this.isScalene();
  if ( this.a !== this.b && this.b === this.c ) {
    this.triangleType = 'isosceles';
  } else if ( this.a !== this.b && this.a === this.c ) {
    this.triangleType = 'isosceles';
  } else if ( this.a !== this.c && this.a === this.b ) {
    this.triangleType = 'isosceles';
  }
  return this.triangleType;
};

module.exports = Triangle;
