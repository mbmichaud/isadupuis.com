import { animate, animateChild, group, query, style, transition, trigger } from "@angular/animations";

export const navigationAnimationDuration = 250;
export const fadedNavigationAnimation =
    trigger('fadedNavigationAnimation', [
        transition('* <=> *', [
            query(':enter, :leave', style({ position: 'absolute', width: '100%' }), { optional: true }),
            group([
                query(':enter', [
                    style({ opacity: '0' }),
                    animate(`${navigationAnimationDuration}ms ${navigationAnimationDuration}ms ease-in-out`, style({ opacity: '1' }))
                ], { optional: true }),
                query(':leave', [
                    style({ opacity: '1' }),
                    animate(`${navigationAnimationDuration}ms ease-in-out`, style({ opacity: '0' }))
                ], { optional: true }),
            ])
        ])
    ]);

