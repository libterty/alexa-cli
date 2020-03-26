#!/usr/bin/env node

const arg = require('arg');
// const rp = require('request-promise');
// const util = require('util');
// global.fetch = require('node-fetch');
const countries = require('./data/data.json').results;

const TopCountry = {
  parseArgumentsIntoOptions() {
    const args = arg(
      {
        '--country': String,
        '--yes': Boolean,
        '-c': '--country',
        '-y': '--yes',
      },
      {
        argv: process.argv.slice(2),
      }
    );
    return {
      country: args['--country'],
    };
  },

  LaunchCountrySearch() {
    const currentOpts = ['AL', 'DE'];
    const options = this.parseArgumentsIntoOptions();
    if (!options.country || typeof options.country !== 'string') {
      throw new Error('Input Country Options syntax error');
    } else if (options.country && currentOpts.indexOf(options.country) === -1) {
      throw new Error(
        `Input Country Options: ${options.country} not found, we only provide AL && DE so far`
      );
    } else {
      this.callAts(options.country);
    }
  },

  callAts(country) {
    // Alexa api request cost is 0.025 usd per unit@@
    // const uri =
    //   '/api?Action=TopSites&Count=20&CountryCode=' +
    //   country +
    //   '&ResponseGroup=Country&Output=json';
    // const opts = {
    //   host: 'ats.stage.api.alexa.com',
    //   path: uri,
    //   uri: `https://ats.stage.api.alexa.com${uri}`,
    //   headers: {
    //     'x-api-key': key,
    //   },
    //   resolveWithFullResponse: true,
    // };
    // rp(opts)
    //   .then((html) => console.log(`${JSON.stringify(html.body, null, 2)}`))
    //   .catch((e) => console.log('failed:' + JSON.stringify(e)));
    const result = countries[country];

    return result
      ? console.log(
          `show top 20 sites URL on www.alexa.com by country: ${country}:`,
          result
        )
      : console.log(`Cannot find data for ${country}`);
  },
};

module.exports = TopCountry;
