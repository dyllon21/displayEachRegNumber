const assert = require('assert');
var countAllFromTown = function(array) {
    var numPlates = array.split(',')
    var fromWhere = []



for (i = 0; i < numPlates.length; i++) {

    if (numPlates[i].startsWith('CL')) {

      console.log(numPlates[i]);
        fromWhere.push(numPlates[i])
    }

}
return fromWhere.length;
}
var fromStellies = countAllFromTown('CL 124,CY 567,CL 345,CJ 456,CL 341','CL');
console.log(fromStellies);
assert.deepEqual(fromStellies, 3)
