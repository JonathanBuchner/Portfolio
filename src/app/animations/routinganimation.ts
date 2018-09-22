import { trigger, animate, transition, style, query } from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  transition('* => *', [
    query(
      ':leave',
      [style({ position: 'absolute'})],
      { optional: true }
    ),query(
      ':enter',
      [style({ opacity: 0 , position: 'absolute'})],
      { optional: true }
    ),
    query(
      ':leave',
      [style({ opacity: 1 }), animate('.3s', style({ opacity: 0}))],
      { optional: true }
    ),
    query(
      ':enter',
      [style({ opacity: 0 }), animate('.3s', style({ opacity: 1 }))],
      { optional: true }
    )
  ])
]);

