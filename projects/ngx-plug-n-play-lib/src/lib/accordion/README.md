# Accordion Module

The `AccordionModule` contains one component, the `AccordionComponent`. It uses content projection to provide a trigger to open and close the accordion, and the body of the accordion. The parent component, the one implementing the accordion, thus determines all the styles for the component.

Here's an example of use:

```html
<pnp-accordion>
	<ng-container accordion-header>
		<p class="accordion-trigger">Trigger</p>
	</ng-container>
	<div accordion-body>
		<p>
			Lorem, ipsum dolor
		</p>
	</div>
</pnp-accordion>
```

When the `.accordion-trigger` is clicked, an Angular animation is triggered to either scroll up or scroll down to show the `.accordion-body`.

The `AccordionComponent` has one `Input`:

-   `triggerSelector: string` &mdash; This is the CSS class selector for the accordion trigger. It defaults to `.accordion-trigger`. If no projected content element has the same class, then a class inside the `AccordionComponent` is used as the trigger, `.accordion-header-container`.

The component has one `Output`:

-   `isCollapsedUpdated: EventEmitter<boolean>`: &mdash; The `Output` emits true or false, letting the parent component know if the accordion is open or not. That way the parent component can change its display in some way depending on the status. It doesn't need to change the visibility of the `[accordion-body]`, but maybe an icon or something like that.
