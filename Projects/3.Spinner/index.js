import process from 'process';
import fs from 'fs';
import path from 'path';
import rdl from 'readline';
const std = process.stdout;
const colors = {
  yellow: [33, 89],
  blue: [34, 89],
  green: [32, 89],
};
const __dirname = path.resolve(path.dirname(''));

const spinners = JSON.parse(
  fs.readFileSync(`${__dirname}/command-line/spinners.json`).toString()
);

class Spinner {
  constructor() {
    this.timer = null;
    this.colorTxt = {
      start: '',
      stop: '',
    };
  }

  spin(spinnerName) {
    process.stdout.write('\x1B[?25l');
    const spin = spinners[spinnerName];
    const spinnerFrames = spin.frames;
    const spinnerTimeInterval = spin.interval;
    let index = 0;
    this.timer = setInterval(() => {
      let now = spinnerFrames[index];
      if (now == undefined) {
        index = 0;
        now = spinnerFrames[index];
      }
      std.write(this.colorTxt.start + now + this.colorTxt.stop);
      rdl.cursorTo(std, 0, 0);
      index = index >= spinnerFrames.length ? 0 : index + 1;
    }, spinnerTimeInterval);
  }

  color(colorName) {
    colorName = colors[colorName];
    this.setColor(colorName);
    return this;
  }

  setColor(colorName) {
    this.colorTxt.start = '\x1b[' + colorName[0] + 'm';
    this.colorTxt.stop = '\x1b[' + colorName[1] + 'm\x1b[0m';
  }
}

export default Spinner;
