
/**
 * test
 */

import { Multiwave } from './index';

function squareSine(pow, length) {
  pow += 1;
  return function(x) {
    x /= length;
    return x;
    return Math.pow(period - 3, pow) - 1;
    
    var period = x / (Math.PI / 2) % 4;
    var a = Math.pow(period - 3, pow) - 1;
    var b = -Math.pow(period - 1, pow) + 1;
    return period > 2 ? a : b;
  };
}

function test(periodIndex, length) {
  return function(i) {
    return Math.sin(i) / ((periodIndex * 2) + 1);
  }
}

var wave = Multiwave(squareSine);

export function dsp(t){
  // return 0;
  return wave(43);
}