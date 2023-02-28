import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `<h1>Hello! This is Property Binding</h1>

  <img src = {{logo}} width='50px'>
  <img [src]="logo" width='50px'>
  <img bind-src="logo" width='50px'>

  <button [disabled]="buttonStatus">My Button</button>
  <button bind-disabled="button2 == 'disabled'">My Button</button>

  `,
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent {
  logo = 'https://banner2.cleanpng.com/20180329/lue/kisspng-angularjs-typescript-node-js-javascript-letter-a-5abd8d10eef164.7123329715223718569787.jpg'

  buttonStatus = false;
  button2='enabled';
}
