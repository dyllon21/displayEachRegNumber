const assert = require('assert');

var allFromTown = function(regNumber, town) {
    var fromWhere = []
    var numPlates = regNumber.split(',')

    for (var i = 0; i < numPlates.length; i++) {
        if (numPlates[i].startsWith(town)) {

            console.log(numPlates[i]);
            fromWhere.push(numPlates[i])

        }
    }
    return fromWhere;

}

var fromStellies = allFromTown('CL 124,CY 567,CL 345,CJ 456,CL 341', 'CL');
//console.log(allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CL'));
assert.deepEqual(fromStellies, ['CL 124', 'CL 345', 'CL 341'])
console.log(fromStellies);

var fromKuilsriver = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CF');
console.log(fromKuilsriver);
assert.deepEqual(fromKuilsriver, []);
