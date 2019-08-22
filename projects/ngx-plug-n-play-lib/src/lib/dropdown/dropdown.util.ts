import { DropdownSelectedItem } from './dropdown-selected-item.interface';

export function getRealItemFromListAfterSelection(
	previouslySelectedItem: DropdownSelectedItem,
	newItem: DropdownSelectedItem,
) {
	if (!previouslySelectedItem && newItem) {
		return newItem;
	}
	if (!newItem && previouslySelectedItem) {
		return previouslySelectedItem;
	}
	if (!newItem && !previouslySelectedItem) {
		return null;
	}

	return {
		index: previouslySelectedItem.index <= newItem.index ? newItem.index + 1 : newItem.index,
		textContent: newItem.textContent,
	};
}
