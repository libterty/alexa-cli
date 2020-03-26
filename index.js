#!/usr/bin/env node

const arg = require('arg');
const userOption = process.argv[2];
const TopRate = require('./top/index');
const TopCountry = require('./country/index');

function init() {
  if (userOption === 'top') {
    TopRate.LaunchTopSearch();
  } else if (userOption === 'country') {
    TopCountry.LaunchCountrySearch();
  } else {
    console.log(`Invalid option: ${userOption}`);
  }
}

init();
