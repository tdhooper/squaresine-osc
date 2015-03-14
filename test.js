
/**
 * test
 */

import { Multiwave } from './index';

function squareSine(periodIndex, length) {
  var pow = (periodIndex * 2) + 4;
  return function(x) {
    // return pow / 10;
    x /= length;
    return x;
    // return Math.pow(x - 3, pow);
    var period = x / (length / 4);
    var a = Math.pow(period - 3, pow) - 1;
    var b = -Math.pow(period - 1, pow) + 1;
    return (period > 2 ? a : b);
  };
}

function test(periodIndex, length) {
  return function(i) {
    return Math.sin((i/length) * 2 * Math.PI) / ((periodIndex * 2) + 1);
  }
}

var wave = Multiwave(test);

export function dsp(t){
  // return 0;
  return wave(43*2);
}