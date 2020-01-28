import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeDisplayComponent } from './employee-display/employee-display.component';
import { FormsModule } from '@angular/forms';

@NgModule({

  declarations: [
    AppComponent,
    EmployeeCreateComponent,
    EmployeeDisplayComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
