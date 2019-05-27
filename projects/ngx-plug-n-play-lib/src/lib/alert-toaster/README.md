# Alert Toaster Module

The alert toaster module provides a service that contains a list of alerts that are accessible via an `alerts` array or an `alerts$` subject that can be subscribed to. To add an alert to the list, inject the service and do the following:

```ts
this._alertToasterService.addAlert({
	message: 'This is the alert message',
	level: 'success',
});
```

`message` and `level` are attributes on the `Alert` interface, but are optional. The `Alert` interface is defined [here](./alert.ts).

```ts
this.alertToasterService.removeAlert(index);
```

You should be able to add and remove alerts from anywhere in the application. To display them, use the `pnp-alerts-display` component:

```html
<pnp-alerts-display>
	<ng-template let-alert let-i="index">
		<p>{{ i }}. {{ alert.level }}&mdash;{{ alert.message }}</p>
	</ng-template>
</pnp-alerts-display>
```

The component will subscribe and unsubscribe from the subject and loop over the items. The HTML that you provide between the `ng-template` tags is what will be output for each alert in the list. This way you can provide a Bootstrap alert if you want, or your own designed alert. The `let-i="index"` will give you access to the index that the item is at so you can remove the alert when necessary.

This component is normally placed in the root component of the application, although it can be placed wherever works best for your situation.
