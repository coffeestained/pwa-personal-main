import { trigger, transition, style, animate } from "@angular/animations"

export const rightInOut = trigger('rightInOut', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateX(10px)' }),
        animate('500ms', style({ opacity: 1, transform: 'translateX(0)' })),
    ]),
    transition(':leave', [
        animate('500ms', style({ opacity: 0, transform: 'translateX(10px)' })),
    ]),
])
