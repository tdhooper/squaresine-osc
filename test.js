
/**
 * test
 */

import { Multiwave } from './index';

function squareSine(periodIndex, length) {
  var pow = (periodIndex * 2) + 4;
  pow = 4;
  if (periodIndex > 0) {
    pow = 6;  
  }
  
  return function(x) {
    return periodIndex;
    // return pow / 10;
    // x /= length;
    // return periodIndex;
    // return x;
    // return x / (periodIndex + 1);
    // return Math.pow(x - 3, pow);
    var offset = length / 4;
    x = x < offset ? x + (length - offset) : x - offset;
    // return (
    //   (z / length)
    //   / (periodIndex + 1)
    // );
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
  return wave(43.05*2);
}