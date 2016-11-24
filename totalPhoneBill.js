const assert = require('assert');
var totalPhoneBill = function(string){
  var data = string.split(', ');
  //console.log(data);
  var sms = []
  var call = []
  var smsCost = 0.65
  var callCost = 2.75
  for(var i = 0;i<data.length;i++){
    if(data[i]=='sms'){
       sms.push(data[i]);
    }
     if(data[i]=='call'){
      call.push(data[i])
    }
  }
//console.log(sms.length);
var totalCost = (smsCost* sms.length) + (callCost* call.length);
//console.log(totalCost);
return totalCost
}
//totalPhoneBill('call, sms, call, sms, sms')
assert.deepEqual(totalPhoneBill('call, sms, call, sms, sms'), 7.45);
