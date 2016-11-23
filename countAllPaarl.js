 const assert = require('assert');

 // var Paarl = []

 var countAllPaarl = function(array) {
     var numPlates = array.split(',')
     var regNumbers = [];
     for (var i = 0; i < numPlates.length; i++) {

         if (numPlates[i].startsWith('CJ')) {
             // console.log(numPlates[i]);
             regNumbers.push(numPlates[i])

         }

     }
     return regNumbers.length
         // return Paarl
 }
 assert.equal(countAllPaarl('CJ 456,CJ 123'), 2);
 //console.log(countAllPaarl('CJ 456,CJ 123'));
