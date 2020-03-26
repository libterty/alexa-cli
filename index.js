#!/usr/bin/env node
const arg = require('arg');

function parseArgumentsIntoOptions() {
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
}

async function LaunchSearch() {
  const options = parseArgumentsIntoOptions();
  console.log('options', options.top);
}

LaunchSearch();
