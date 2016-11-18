const assert = require('assert');
var list = []
var shoppingList = function(string) {
    //console.log(string);
    var data = string.split(',')

    //console.log(typeof(data));
    for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
        list.push(data[i])

    }
    return list
}
assert.deepEqual(shoppingList('1x bread,6x hotdog rolls,2x tubs of margarine'), ['1x bread', '6x hotdog rolls', '2x tubs of margarine']);
