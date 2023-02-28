import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-item-update',
  templateUrl: './item-update.component.html',
  styleUrls: ['./item-update.component.css']
})
export class ItemUpdateComponent {
  //input updated by parent component
  @Input() item = '';
  //output sent to parent via eventEmitter objecty
  @Output() itemUpdater = new EventEmitter<string>();

  //method to hand event
  updateItem(value: string) {
    this.itemUpdater.emit(value)
  }
}
