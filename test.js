
/**
 * test
 */

import { Squaresine } from './index';

var wave = Squaresine();

export function dsp(t){
  // return 0;
  return wave(43/3);
}