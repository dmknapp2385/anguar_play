import { Component } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  template: `
  <h1>Class Binding</h1>
  <p [class]='sigularBinding'>This has singluar class binding</p>
  <p [ngClass]='multiBinding'>This has multiple binding class binding</p>
  `,
  styles: [`
    h1 {
      text-decoration: underline;
    }

    .red-text {
      color:red;
    }

    .large-title {
      font-size: 4em;
    }

  `]
})
export class ClassBindingComponent {
  sigularBinding = 'red-text'
  multiBinding = {
    'red-text':true,
    'large-title': true,

    
  }
}
