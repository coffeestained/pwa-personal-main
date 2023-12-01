import { trigger, transition, style, animate } from "@angular/animations"

export const rightInOut = trigger('rightInOut', [
    transition(':enter', [
        style({ opacity: 0, left: '10px' }),
        animate('500ms', style({ opacity: 1, left: "0px" })),
    ]),
    transition(':leave', [
        animate('500ms', style({ opacity: 0, left: "10px" })),
    ]),
])
