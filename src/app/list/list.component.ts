import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  currentItem = 'Input Item'
  list = ['Wash Dishes', 'Walk Dog']
  
  //method to add task to list; method referenced in child component
  addTask(task: string) {
    this.list.push(task)
  }
}
