const assert = require('assert');
var enoughAirtime = function(string, balance) {
    var data = string.split(',')
    var call = [];
    // var data = []
    var total = 0;
    var callCost = 1.88
    var dataCost = 12
    var smsCost = 0.75
        //var airtime = 50
    for (var i = 0; i < data.length; i++) {
        if (data[i] == 'call') {
            // call.push(data[i])
            total = total + 1.88;
        } else if (data[i] == 'data') {
            // dataBundles.push(data[i])
            total = total + 12;
        } else if (data[i] == 'sms') {
            // sms.push(data[i])
            total = total + 0.75;
        }
    }
    var totalCost = (balance - total);
    return totalCost.toFixed(2);
}

//console.log(enoughAirtime('call,call,call,data,sms,sms,call,data',50));
assert.deepEqual(enoughAirtime('call,call,call,data,sms,sms,call,data', 50), 16.98);
