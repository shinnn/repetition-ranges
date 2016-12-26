'use strict';

const repetitionRanges = require('.');
const test = require('tape');

test('repetitionRanges()', t => {
  const arr = ['a', 'b', 'b'];

  t.deepEqual(
    repetitionRanges(arr, 'b'),
    [{start: 1, end: 2}],
    'should return start/end positions of the repeated search values.'
  );

  t.deepEqual(arr, ['a', 'b', 'b'], 'should not mutate the passed array.');

  t.deepEqual(
    repetitionRanges([0, 0, '0', 0, 0, 0, Buffer.from('0'), null, undefined], 0),
    [{start: 0, end: 1}, {start: 3, end: 5}],
    'should get multiple positions if exist.'
  );

  t.deepEqual(
    repetitionRanges(['foo', 'bar', 'foo'], 'foo'),
    [],
    'should not include multiple but inconsecutive values to the result.'
  );

  t.deepEqual(
    repetitionRanges([1, 2, 3], 123),
    [],
    'should return an empty array if the search value doesn\'t exist in the array.'
  );

  t.deepEqual(
    repetitionRanges([], true),
    [],
    'should return an empty array if the first argument is an empty array.'
  );

  t.throws(
    () => repetitionRanges(1, ['a']),
    /^TypeError.*Expected an array, but got 1 \(number\)\./,
    'should throw a type error when the first argument is a non-array value.'
  );

  t.end();
});
