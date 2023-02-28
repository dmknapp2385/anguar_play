import { Component } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-service-example',
  template: `
    <h1>Using a Service</h1>
      <ul>
        <li *ngFor="let car of carsArray">{{car}}</li>
      </ul>
      <p>{{someProperty}}</p>
  `,
  styleUrls: ['./service-example.component.css']
})
export class ServiceExampleComponent {
  //public vs private. public accessible by component template, private will need method to create new property
  constructor(private dataService:DataService){

  }

  someProperty:string = '';
  carsArray: Array<string> = [];

  //angular hook that runs on component load
  ngOnInit() {
    console.log(this.dataService.cars);

    this.someProperty = this.dataService.myData();
    this.carsArray = this.dataService.cars;
  }
}
