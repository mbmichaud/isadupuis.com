import { animate, animateChild, group, query, style, transition, trigger } from "@angular/animations";

export const slideInAnimation =
    trigger('routeAnimations', [
        transition('* <=> *', [
            query(':enter, :leave', style({ position: 'fixed', width: '100%' })),
            group([
                query(':enter', [
                    style({ opacity: '0' }),
                    animate('250ms 250ms ease-in-out', style({ opacity: '1' }))
                ]),
                query(':leave', [
                    style({ opacity: '1' }),
                    animate('250ms ease-in-out', style({ opacity: '0' }))]),
            ])
        ])
    ]);

