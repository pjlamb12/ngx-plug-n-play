export function highlightStringMatches(itemString: string, patternString: string, caseInsensitive: boolean = true) {
	const patternArray: string[] = patternString
		.trim()
		.split(' ')
		.filter(item => item !== '');
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
