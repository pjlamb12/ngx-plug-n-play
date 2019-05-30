import { highlightStringMatches, buildPatternArray } from './typeahead.util';

describe('Typeahead Util', () => {
	describe('highlightStringMatches', () => {
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

	describe('buildPatternArray', () => {
		it('should return an array with unique values for a case insensitive match', () => {
			const patternString: string = 'test test';
			const arr: string[] = buildPatternArray(patternString, true);

			expect(arr.length).toBe(1);
			expect(arr[0]).toBe('test');
		});

		it('should return an array with unique values for a case insensitive match', () => {
			const patternString: string = 'Test test';
			const arr: string[] = buildPatternArray(patternString, true);

			expect(arr.length).toBe(1);
			expect(arr[0]).toBe('test');
		});

		it('should return an array with unique values for a case insensitive match', () => {
			const patternString: string = 'Test test';
			const arr: string[] = buildPatternArray(patternString, false);

			expect(arr.length).toBe(2);
			expect(arr[0]).toBe('Test');
			expect(arr[1]).toBe('test');
		});
	});
});
