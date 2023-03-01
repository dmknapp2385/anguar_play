import { Component } from '@angular/core';
// install animations dependencie and add to app.module.ts in imports array before using animations
import {style, state, keyframes, trigger, transition, animate} from '@angular/animations'

@Component({
  selector: 'app-animations',
  template: `
  <p [@awesomeAnimation]="state" (click)="animateMe()">
  I will animate
  </p>
  `,
  styles: [`
   p {
    width: 200px;
    background: lightgray;
    margin: 100px auto;
    text-align: center;
    padding: 20px;
    font-size: 4em
   }
  `], 
  animations: [
    trigger('awesomeAnimation', [
      state('small', style({
        transform: 'scale(1)',
        color:'yellow', 
        fontSize: '3em' 
      })),
      state('large', style({
        transform: 'scale(1.2)', 
        fontSize: '3em', 
        color: 'blue'
      })), 

      // transition element from small style to large style in 300ms with ease-in (slow to fast)
      transition('small <=> large', animate('3s ease-out', keyframes([
        style({opacity: 0, transform: 'rotate(0deg)', color: 'green', offset: 0}),
        style({opacity: .5, transform: 'rotate(180deg)', color: 'blue', offset: .25}),
        style({opacity: 1, transform: 'rotate(360deg)', color: 'blue', offset: .8}),
      ])))
    ]),
  ]

})



export class AnimationsComponent {
  state: string = 'small'

  animateMe() {
    this.state = (this.state === 'small' ? 'large': 'small')
  }
}
