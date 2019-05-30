import { highlightStringMatches } from './typeahead.util';

describe('Typeahead Util', () => {
	it('should highlight the matching string patterns with case insensitivity', () => {
		const itemString = 'This is a test, this is a test';
		const patternString = 'this';

		const result = highlightStringMatches(itemString, patternString, true);

		expect(result).toBe('<strong>This</strong> is a test, <strong>this</strong> is a test');
	});

	it('should trim the matching string and highlight the matching string patterns with case insensitivity', () => {
		const itemString = 'This is a test, this is a test';
		const patternString = 'this ';

		const result = highlightStringMatches(itemString, patternString, true);

		expect(result).toBe('<strong>This</strong> is a test, <strong>this</strong> is a test');
	});

	it('should highlight the matching string patterns with case sensitivity', () => {
		const itemString = 'This is a test, this is a test';
		const patternString = 'this';

		const result = highlightStringMatches(itemString, patternString, false);

		expect(result).toBe('This is a test, <strong>this</strong> is a test');
	});

	it('should highlight the matching string patterns (with multiple matching words) with case insensitivity', () => {
		const itemString = 'This is A test, this is a test';
		const patternString = 'this a';

		const result = highlightStringMatches(itemString, patternString, true);

		expect(result).toBe(
			'<strong>This</strong> is <strong>A</strong> test, <strong>this</strong> is <strong>a</strong> test',
		);
	});

	it('should highlight the matching string patterns (with multiple matching words) with case sensitivity', () => {
		const itemString = 'This is A test, this is a test';
		const patternString = 'this a';

		const result = highlightStringMatches(itemString, patternString, false);

		expect(result).toBe('This is A test, <strong>this</strong> is <strong>a</strong> test');
	});
});
