# Dropdown Module

The `ngx-plug-n-play` Dropdown Module contains the `DropdownComponent` and a utility file. The component has the two `Inputs`, both of which default to true. They are:

## Dropdown Component API

-   `hideResultsOnSelect: boolean` &mdash; If this is set to true, an event will be emitted after an item is selected telling the parent component that it's okay to hide the option list
-   `closeOnOuterClick: boolean` &mdash; If this is set to true, the options list will close when the user clicks outside of the dropdown component.

There are two `Output`s for the component as well, and they are related to the `Input`s above:

-   `updateShowResults: EventEmitter<Boolean>` &mdash; If the `hideResultsOnSelect` `Input` is true, or the `closeOnOuterClick` is true, then this `Output` will emit `true` so that the parent component can react accordingly.
-   `dropdownItemSelected: EventEmitter<DropdownSelectedItem>` &mdash; When an item is selected, its `index` and the `textContent` of the item are emitted as an object of type `DropdownSelectedItem`

The utility file has one function in it that will be useful if you want to hide the currently selected item from the list. It's called `getRealItemFromListAfterSelection`.

-   `getRealItemFromListAfterSelection: DropdownSelectedItem` &mdash; The indices of the items in the list get messed up if you are hiding the currently selected item from the list, so this function will make sure that you get the correct item from the list all the time. Use this function if you want to hide the currently selected item.

## Dropdown Component Demo

Here's an example of how to use the `DropdownComponent`:

```html
<pnp-dropdown
	(updateShowResults)="showDropdownResults = $event"
	[closeOnOuterClick]="true"
	(dropdownItemSelected)="selectedItemUpdated($event)"
>
	<button #dropdownTrigger dropdown-trigger>{{ triggerText }}</button>
	<ul #dropdownOptions dropdown-options [class.open]="showDropdownResults">
		<ng-template ngFor let-item [ngForOf]="dropdownItems" let-i="index">
			<li *ngIf="!selectedItem || selectedItem.index !== i">{{ item }}</li>
		</ng-template>
	</ul>
</pnp-dropdown>
```

The `Inputs` and `Outputs` are discussed above, but the important part here to point out is that two elements need to be passed in via content projection, a dropdown trigger and a dropdown options element. The dropdown trigger needs an attribute of `dropdown-trigger` and a template variable of `#dropdownTrigger`. The dropdown options need an attribute of `dropdown-options` and a template variable of `#dropdownOptions`.
