import { Injectable } from '@angular/core';

// this decorater emits meta data associated with this service
@Injectable({
  providedIn: 'root'
})

// make sure to import this service to the app.module.ts file and enter into the providers array
export class DataService {
  //would usually connect to database to get data
  constructor() { }

  // hard coded data
  cars = ['ford', 'toyota', 'chevy', 'dodge']
  myData(){
    return 'This is my data!'
  }
}
