
/**
 * test
 */

import { Multiwave } from './index';

function squareSine(periodIndex, length) {
  var a = 10;
  periodIndex = periodIndex < a ? periodIndex : a - (periodIndex - a);
  var pow = (periodIndex * 2) + 6;
  
  // pow = Math.pow(pow, 2);
  
  return function(x) {
    // return periodIndex / 20;
    var period = x / (length / 4);
    var a = Math.pow(period - 3, pow) - 1;
    var b = -Math.pow(period - 1, pow) + 1;
    return period > 2 ? a : b;
  };
}

function test(periodIndex, length) {
  return function(i) {
    var x =  i / length;
    return Math.sin(x * 2 * Math.PI) / ((periodIndex * 2) + 1);
  }
}

var waveA = Multiwave(squareSine);

export function dsp(t){
  // return 0;
  return waveA(1.7) * 8;
}