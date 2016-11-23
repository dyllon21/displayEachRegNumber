const assert = require('assert');
var Paarl = []
var firstPaarl = function(array) {
    var regNumber = array.split(',')
    for (var i = 0; i < regNumber.length; i++) {
        if (regNumber[i].startsWith('CJ')) {
            console.log(regNumber[i]);
            Paarl.push(regNumber[i])
        }
    }
    return Paarl
}
assert.deepEqual(firstPaarl('CL 124,CY 567,CL 345,CJ 456,CL 341'), ['CJ 456']);
//var dy=firstPaarl('CJ 123,CA 121')
