#!/usr/bin/env node

import { roll } from "/lib/roll.js"
import minimist from 'minimist';

const args = minimist(process.argv.slice(2));

let result = JSON.stringify(roll(args.sides, args.dice, args.rolls));
console.log(result);

