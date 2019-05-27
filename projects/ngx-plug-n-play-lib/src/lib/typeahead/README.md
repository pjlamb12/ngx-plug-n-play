# `ngx-plug-n-play` Typeahead Module

```ts
import { TypeaheadModule, TypeaheadInputDirective, TypeaheadResultDirective } from 'ngx-plug-n-play';
```

This module includes a typehead input directive and a typeahead result directive. The typeahead input directive allows you to add the typeahead functionality to an input by adding the attribute directive to the input. The typeahead result directive highlights matches for the term you provide. Below are examples of implementation.

## `pnpTypeaheadInput`

This directive should be added to a text input. It will listen to the typing and output the value of the input after a debounce time. It will ignore the following keys and not emit after they're pressed:

-   ArrowUp
-   ArrowDown
-   Escape
-   Enter

It ignores these so that you can enable traversing the results with the keyboard and can implement actions when Enter is pressed. If Escape is pressed the input will lose focus.

Here is an example of implementing the directive:

```html
<input
	pnpTypeaheadInput
	typeaheadDebounceTime="500"
	(valueChanged)="typeaheadValueChanged($event)"
	type="text"
	class="form-control"
/>
```

The `typeaheadDebounceTime` input is for a number, in milliseconds, that the component will wait after the user types before emitting the new value. It defaults to 300 milliseconds.

The `typeaheadValueChanged` output gives the implementing component the updated value which can then be used for searching or whatever else you may need it for.

## `pnpTypeaheadResult`

The `pnpTypeaheadResult` directive should be applied to an HTML element that is used as the results of the typeahead search. There are a few inputs that should be provided as well. The directive can be applied to any element that contains text, but it will most likely be applied to `p` tags or `li` tags. It can (and most likely will) be used in conjunction with an `*ngFor` directive as well.

```html
<ul>
	<li
		pnpTypeaheadResult
		[matchTerm]="matchTerm"
		[highlightMatches]="true | false"
		[caseInsensitiveMatch]="true | false"
	>
		Result content 1
	</li>
	<li
		pnpTypeaheadResult
		[matchTerm]="matchTerm"
		[highlightMatches]="true | false"
		[caseInsensitiveMatch]="true | false"
	>
		Result content 2
	</li>
</ul>
```

`matchTerm` should be the string that should be higlighted if it is contained in the result item. The other two inputs are booleans, allowing you to turn off matching highlights and turning on/off case sensitivity on matching. By default, the matching is case insensitive.
