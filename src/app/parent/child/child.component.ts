import { Component, Input } from '@angular/core';

// child component to parent with item property linked to currentItem property in parent
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() item = '' // decorate child property with @ Input, property datatype = string

}
