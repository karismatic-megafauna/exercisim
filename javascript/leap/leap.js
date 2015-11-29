'use strict'

var Year = function(year) {
    this.year = year;
};

Year.prototype.isLeap = function() {
    return false;
};

module.exports = Year;
