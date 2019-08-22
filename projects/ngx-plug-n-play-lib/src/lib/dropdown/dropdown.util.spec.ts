import { getRealItemFromListAfterSelection } from './dropdown.util';

describe('DropdownUtil', () => {
	it('should return the newItem if the previouslySelectedItem is falsy', () => {
		const selectedItem = getRealItemFromListAfterSelection(null, { index: 0, textContent: 'Test' });
		expect(selectedItem.index).toBe(0);
	});

	it('should return the previouslySelectedItem if the newItem is falsy', () => {
		const selectedItem = getRealItemFromListAfterSelection({ index: 0, textContent: 'Test' }, null);
		expect(selectedItem.index).toBe(0);
	});

	it('should return null if both items are falsy', () => {
		const selectedItem = getRealItemFromListAfterSelection(undefined, null);
		expect(selectedItem).toBeFalsy();
	});

	it('should return the an index of 1 if both items index is 0', () => {
		const selectedItem = getRealItemFromListAfterSelection(
			{ index: 0, textContent: 'Test Item 1' },
			{ index: 0, textContent: 'Test Item 2' },
		);
		expect(selectedItem.index).toBe(1);
	});

	it('should return the an index of 2 if the new item has a lower index number than the previous item', () => {
		const selectedItem = getRealItemFromListAfterSelection(
			{ index: 2, textContent: 'Test Item 3' },
			{ index: 1, textContent: 'Test Item 2' },
		);
		expect(selectedItem.index).toBe(1);
	});
});
