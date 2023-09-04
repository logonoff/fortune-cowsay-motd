/**
 * Modified from lolcatjs
 * @link https://github.com/robertmarsal/lolcatjs/blob/master/index.js
 * @license WTFPL
 */

import chalk from "chalk";

export const options = {
    // Seed of the rainbow, use the same for the same pattern
    seed: 0,
    // Spread of the rainbow
    spread: 8.0,
    // Frequency of the rainbow colors
    freq: 0.3,
};

export const rainbow = function(freq, i) {
    const red   = Math.round(Math.sin(freq * i + 0) * 127 + 128);
    const green = Math.round(Math.sin(freq * i + 2 * Math.PI / 3) * 127 + 128);
    const blue  = Math.round(Math.sin(freq * i + 4 * Math.PI / 3) * 127 + 128);

    return {
        red:   red,
        green: green,
        blue:  blue
    }
};

export const colorize = function(char, colors) {
    return (chalk.rgb(colors.red, colors.green, colors.blue)(char));
};

export const printlnPlain = function(colorize, line) {
    let output = "";

    for (let i = 0; i < line.length; i++) {
        output += colorize(line[i], rainbow(options.freq, options.seed + i / options.spread));
    }

    return output;
};

export const println = function(line) {
    return printlnPlain(colorize, line) + "\n";
};

/**
 * @param {string} string string to colorize
 * @returns a rainbow string with newlines at the end of each line
 */
export const fromString = function(string) {
    string = string || '';
    const lines = string.split('\n');
    let output = "";
    lines.forEach(function (line) {
        options.seed += 1;
        output += println(line);
    });
    return output;
};

export default fromString;
