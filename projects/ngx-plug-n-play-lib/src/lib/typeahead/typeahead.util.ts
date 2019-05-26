export function highlightStringMatches(itemString: string, patternString: string, caseInsensitive: boolean = true) {
	const patternArray: string[] = patternString.split(' ');
	const regExpOptions: string = caseInsensitive ? 'ig' : 'g';

	for (const pattern of patternArray) {
		const regExp = new RegExp(pattern, regExpOptions);
		itemString = itemString.replace(regExp, (match, index) => {
			return `<strong>${match}</strong>`;
		});
	}
	return itemString;
}
