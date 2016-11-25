const assert = require('assert');

var findShortest = function(string) {

        var sentence = string.split(' ');
        var longestlength = sentence.length
        var shortestWord =  '';
        for (var i = 0; i < sentence.length; i++) {
            if (sentence[i].length < longestlength) {
                shortestWord = sentence[i];
            }
        }
        //console.log(shortestWord);
        return shortestWord;
    };
    assert.equal(findShortest('coding is more exciting'),'is');
//var shorter = findShortest('coding is more exciting');
//console.log(shorter);
