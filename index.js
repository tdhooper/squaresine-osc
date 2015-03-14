
/**
 * @module multiwave-osc
 * @license mit
 */

export default Oscillator;

/**
 * Creates a wavetable oscillator for sample `size`.
 * Optionally pass `alias=false` to disable playback waveform aliasing.
 *
 * @param {Number} size (optional)
 * @param {Boolean} alias (optional)
 * @public
 * @class
 */

function Oscillator(wavefunc, size, alias){
  if (!(this instanceof Oscillator)) return new Oscillator(wavefunc, size, alias);
  var steps = 2;
  var waveCount = 1;
  var waveMultiply = Math.pow(steps, 2) * waveCount
  
  this.pos = 0;
  this.size = (size * waveMultiply) || (sampleRate / steps);
  this.coeff = this.size / sampleRate;
  this.table = new Float32Array(this.size);
  this.alias = alias === false ? false : true;
  var scale = 2 * Math.PI / this.size;
  
  var periodSize = this.size / steps;
  
  function periodIndex(i) {
    return Math.floor(
      ((i % periodSize) / periodSize) * steps
    ) / steps;
  }

  for (var i = 0; i < this.size; i++) {
    this.table[i] = wavefunc(
      periodIndex(i),
      this.size * scale * waveMultiply
    )(i * scale * waveMultiply);
  }
}




/**
 * Generates next sample for frequency `freq`.
 *
 * @param {Number} freq
 * @return {Number}
 * @public
 */

Oscillator.prototype.play = function(freq){
  this.pos += freq * this.coeff;
  if (this.pos >= this.size) this.pos -= this.size;
  this.index = this.pos | 0;
  if (!this.alias) return this.table[this.index];
  this.alpha = this.pos - this.index;
  this.next = this.table[this.index == this.size - 1 ? 0 : this.index + 1];
  this.curr = this.table[this.index];
  return this.curr + (this.next - this.curr) * this.alpha;
};


export var Multiwave = function(wavefunc, size, alias) {
  var osc = Oscillator(wavefunc, size, alias);
  return osc.play.bind(osc);
}