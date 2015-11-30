var Year = function(year) {
    this.year = year;
};

Year.prototype.isLeap = function() {
  var four = this.year % 4;
  var hundred = this.year % 100;
  var fourHundred = this.year % 400;

  if ( four === 0 && hundred !== 0 || fourHundred === 0) {
    return true;
  } else {
    return false;
  }
};

module.exports = Year;
