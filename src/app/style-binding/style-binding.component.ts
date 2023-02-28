import { Component } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  template: `
    <h1 [style.color]="titleColor">Style Binding</h1>
    <h1 [style.color]="ternary? 'green':'pink'">Style Binding Ternary Operator</h1>
    
    <h1 [ngStyle]="ngStyles">NG Styling</h1>
  `,
  styles: [`
 

  .red-text {
    color:red;
  }

  .large-title {
    font-size: 4em;
  }

`]

})


export class StyleBindingComponent {
  titleColor="Blue";
  ternary = false;
  ngStyles = {
    'color': 'yellow',
    'font-size':'5em', 
    'border': '5px solid black'
  }

}
