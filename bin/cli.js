#!/usr/bin/env node

import {roll} from "../lib/roll.js"
import parseArgs from 'minimist';

var argv = parseArgs(process.argv);
var r = roll(argv.sides, argv.dice, argv.rolls);

const obj = {sides: argv.sides, dice: argv.dice, rolls: argv.rolls, results: r};
console.log(JSON.stringify(obj));
