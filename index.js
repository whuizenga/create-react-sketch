#!/usr/bin/env node

const prog = require('caporal');
const createComponent = require('./lib/create');

prog
  .version('1.0.0')
  .argument('<name>', 'Name of the react-sktechapp component you want to make')
  .action(createComponent);

prog.parse(process.argv);