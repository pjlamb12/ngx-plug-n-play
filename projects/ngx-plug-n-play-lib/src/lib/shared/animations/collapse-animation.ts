import { state, style, animate, transition } from '@angular/animations';

export function collapseAnimation(
	slideDownDuration: string = '500ms',
	slideUpDuration: string = '500ms',
	startingOpacity: string = '1',
	endingOpacity: string = '1',
) {
	return [
		state(
			'collapsed',
			style({
				height: '0',
				overflow: 'hidden',
				opacity: startingOpacity,
			}),
		),
		state(
			'open',
			style({
				overflow: 'hidden',
				opacity: endingOpacity,
			}),
		),
		transition('collapsed=>open', animate(slideDownDuration)),
		transition('open=>collapsed', animate(slideUpDuration)),
	];
}
