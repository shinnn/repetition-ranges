import arrIndexesOf from 'arr-indexes-of';

export default function repetitionRanges(arr, value) {
	var indexes = arrIndexesOf(arr, value);

	var results = [];
	var i = 0;
	var start = null;

	while (i < indexes.length) {
		if (indexes[i] === indexes[i + 1] - 1) {
			if (start === null) {
				start = indexes[i];
			}
		} else if (start !== null) {
			results.push({
				start: start,
				end: indexes[i]
			});

			start = null;
		}

		i += 1;
	}

	return results;
}
