# repetition-ranges

[![NPM version](https://img.shields.io/npm/v/repetition-ranges.svg)](https://www.npmjs.com/package/repetition-ranges)
[![Bower version](https://img.shields.io/bower/v/repetition-ranges.svg)](https://github.com/shinnn/repetition-ranges/releases)
[![Build Status](https://travis-ci.org/shinnn/repetition-ranges.svg?branch=master)](https://travis-ci.org/shinnn/repetition-ranges)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/repetition-ranges.svg)](https://coveralls.io/r/shinnn/repetition-ranges)

Get start/end positions where a given value consecutively appears in the array

```javascript
import repetitionRanges from 'repetition-ranges';

repetitionRanges(['a', 'b', 'a', 'a', 'b', 'a', 'a', 'a'], 'a');
//=> [{start: 2, end: 3}, {start: 5, end: 7}]
```

| index                      | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| :--------------------------|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| array                      | a | b | a | a | b | a | a | a |
| (`a` appeared)             | ○ |   | ○ | ○ |   | ○ | ○ | ○ |
| `a` consecutively appeared |   |   | ○ | ○ |   | ○ | ○ | ○ |

## Installation

### [npm](https://www.npmjs.com/)

```
npm install repetition-ranges
```

### [bower](https://bower.io/)

```
bower install repetition-ranges
```

## API

### repetitionRanges(*array*, *searchValue*)

*array*: `Array`  
*searchValue*: any type (the value to resolve its repetition ranges)  
Return: `Array` of objects with `start` and `end` properties

```javascript
repetitionRanges([1, 1, 1], 1); //=> [{start: 0, end: 2}]
repetitionRanges([1, 1, '1', 1, 1, Symbol('1')], 1); //=> [{start: 0, end: 1}, {start: 3, end: 4}]

repetitionRanges(['a', 'b'], 'c'); //=> []
repetitionRanges(['a', 'b', 'a'], 'a'); //=> []
repetitionRanges([], 'a']); //=> []
```

## License

[Creative Commons Zero v1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/deed)
