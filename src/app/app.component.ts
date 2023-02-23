import { Component } from '@angular/core';


// componenet decorator, designated by @ symbol
@Component({
  //CSS selctor for the componenet
  // selecting the <app-root> element in the main index.html sheet
  selector: 'app-root',
  // designates the html for the component
  templateUrl: './app.component.html',
  //style sheet for the html
  styleUrls: ['./app.component.css']
})

//properties and methods defined here, to be used in the html sheet with {{title}}
export class AppComponent {
  title = 'ng4-playground';
}
