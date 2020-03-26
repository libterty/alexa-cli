#!/usr/bin/env node

const arg = require('arg');
const tops = require('./data/data.json').results;

const TopRate = {
  parseArgumentsIntoOptions() {
    const args = arg(
      {
        '--top': Number,
        '--yes': Boolean,
        '-t': '--top',
        '-y': '--yes',
      },
      {
        argv: process.argv.slice(2),
      }
    );
    return {
      top: args['--top'] || 20,
    };
  },

  LaunchTopSearch() {
    const options = this.parseArgumentsIntoOptions();
    if (options.top && options.top <= 0) {
      throw new Error(`Invaild Serach Top Rating ${options.top}`);
    } else if (options.top && options.top > 40) {
      throw new Error(
        `Max Search Top Rating Exceed: ${options.top}, We only provide 40 data`
      );
    } else if (options.top && options.top <= 40 && options.top > 0) {
      const result = this.callAts(options.top);
      console.log(
        `show top ${options.top} sites URL on www.alexa.com.`,
        result
      );
    }
  },

  callAts(num) {
    return tops.slice(0, num);
  },
};

module.exports = TopRate;
