export function highlightStringMatches(itemString: string, patternString: string, caseInsensitive: boolean = true) {
	const patternArray: string[] = buildPatternArray(patternString, caseInsensitive);
	const regExpOptions: string = caseInsensitive ? 'ig' : 'g';

	for (let pattern of patternArray) {
		pattern = pattern.trim();
		const regExp = new RegExp(pattern, regExpOptions);
		itemString = itemString.replace(regExp, (match, index) => {
			return `<strong>${match}</strong>`;
		});
	}
	return itemString;
}

export function buildPatternArray(patternString: string, caseInsensitive: boolean) {
	const patternArrayRaw: string[] = patternString
		.trim()
		.split(' ')
		.filter(item => item !== '');

	const patternArray: string[] = caseInsensitive
		? Array.from(new Set(patternArrayRaw.map(w => w.toLowerCase())))
		: [...patternArrayRaw];

	return patternArray;
}
