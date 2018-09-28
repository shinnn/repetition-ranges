'use strict';

var appendType = require('append-type');

/*!
 * repetition-ranges | ISC (c) Shinnosuke Watanabe
 * https://github.com/shinnn/repetition-ranges
*/

module.exports = function repetitionRanges(arr, value) {
	if (!Array.isArray(arr)) {
		throw new TypeError('Expected an array, but got ' + appendType(arr) + '.');
	}

	var results = [];

	if (arr.length < 2) {
		return results;
	}

	var i = arr.indexOf(value);

	if (i === -1) {
		return results;
	}

	var last = arr.lastIndexOf(value);

	if (i === last) {
		return results;
	}

	if (i + 1 === last) {
		return [{start: i, end: last}];
	}

	var start = i++;

	do {
		if (arr[i] !== value) {
			start = null;
			continue;
		}

		if (arr[i + 1] === value) {
			if (start === null) {
				start = i;
			}

			continue;
		}

		if (start !== null) {
			results.push({
				start: start,
				end: i
			});
		}

		start = null;
	} while (i++ < last);

	return results;
}
