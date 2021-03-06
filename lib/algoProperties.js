var ev = require('equihashverify');
var util = require('./util.js');

var diff1 = global.diff1 = 0x0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f;

var algos = module.exports = global.algos = {
    'equihash': {
        multiplier: 1,
        diff: parseInt('0x0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f'),
        hash: function(){
            return function(){
                return ev.verify.apply(this, arguments);
            }
        }
    }
};

for (var algo in algos){
    if (!algos[algo].multiplier)
        algos[algo].multiplier = 1;
}
