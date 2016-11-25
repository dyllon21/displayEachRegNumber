const assert = require('assert');

var longestWord = function(string) {

        var longWord = "";
        var sentence = string.split(" ");
        for (var i = 0; i < sentence.length; i++) {
            if (sentence[i].length > longWord.length) {

                longWord = sentence[i];
            }
        }

        return longWord;
    }
    assert.equal(longestWord("coding is more exciting"),"exciting");
//var longer = longestWord('coding is more exciting');
//console.log(longer);
