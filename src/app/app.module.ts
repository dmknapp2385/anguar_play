import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ItemUpdateComponent } from './list/item-update/item-update.component';
import { InlineComponent } from './inline/inline.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import {DataService} from './data.service';
import { ServiceExampleComponent } from './service-example/service-example.component'
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ItemUpdateComponent,
    InlineComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    ServiceExampleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
