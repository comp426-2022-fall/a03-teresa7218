#!/usr/bin/env node

import {roll} from "../lib/roll.js"
import parseArgs from 'minimist';

var argv = parseArgs(process.argv);
var r = roll(argv.sides, argv.dice, argv.rolls);
console.log(JSON.stringify(r));
