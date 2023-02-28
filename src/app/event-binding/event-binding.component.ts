import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <h1>Event Binding</h1>
    <button (click)="myEvent($event)"> My Button</button>
  `,
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  myEvent(event: Event){
    console.log(event.timeStamp)
  }

}
