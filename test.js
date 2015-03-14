
/**
 * test
 */

import { Multiwave } from './index';

function squareSine(periodIndex, length) {
  // periodIndex = periodIndex < 10 ? periodIndex : 10 - (periodIndex - 10);
  var pow = (periodIndex * 2) + 4;
  // pow = Math.pow(pow, 3);
  
  return function(x) {
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

var wave = Multiwave(squareSine);

export function dsp(t){
  // return 0;
  return wave(1/2) * 1;
}