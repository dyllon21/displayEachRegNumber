const assert = require('assert');

var Paarl = []

var allPaarl = function(string) {
    var regNumbers = string.split(',')
    for (var i = 0; i < regNumbers.length; i++) {
        if (regNumbers[i].startsWith('CJ')) {
            console.log(regNumbers[i])
            Paarl.push(regNumbers[i])
        }
    }
    return Paarl
}
assert.deepEqual(allPaarl('CL 124,CY 567,CL 345,CJ 456,CL 341,CJ 100'), ['CJ 456', 'CJ 100']);
