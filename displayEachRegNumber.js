  const assert = require('assert');
  var list = []
  var displayEachRegNumber = function(array){
      var data = array.split(',')
      for (var i = 0; i < data.length; i++) {
          console.log(data[i]);
          list.push([i])
      }
      return data
  }
  assert.deepEqual(displayEachRegNumber('CL 124,CY 567,CL 345,CJ 456,CL 341','CL'),['CL 124', 'CY 567', 'CL 345', 'CJ 456', 'CL 341']);
