import { Component } from '@angular/core';

@Component({
  selector: 'app-inline',
  // inline html (not referencing external html page; use back tics for multiline
  template:  `
  <div>
    <h1>I am Inline</h1>
    <p>This is a separate paragraph with {{myObject.species}}</p>
    <ul>
      <li *ngFor = "let monkey of monkeyArray">{{monkey}}</li>
    </ul>
    <div>
      <p *ngIf ="myObject.gender"> I am {{myObject.gender}} and my name is {{myObject.name}}</p>
      <p *ngIf = "monkeyArray.length == 4; else otherTmpl"> There are four monkies</p>
      <ng-template #otherTmpl> There are actually {{monkeyArray.length}} monkies</ng-template>
    </div>
    <div>  
      <h3 *ngIf="isTrue; then tmpl1 else tmpl2"></h3>
      <ng-template #tmpl1>This is true</ng-template>
      <ng-template #tmpl2>This is false</ng-template>
    </div>
  </div>`, 
  styleUrls: ['./inline.component.css']
})
export class InlineComponent {
  myObject = {
    name: 'Bobo', 
    age: '27', 
    gender: 'Male',
    species: 'monkey'
  }

  monkeyArray = ['Bobo', 'Stephan', 'Jim']

  isTrue = false;
}
