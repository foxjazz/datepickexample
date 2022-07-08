import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePickerSampleComponent } from './date-picker-sample/date-picker-sample.component';
import {MatDatepickerModule} from '@angular/material/datepicker'
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCommonModule,  MatNativeDateModule} from '@angular/material/core'
import {MatInputModule} from "@angular/material/input";
@NgModule({
  declarations: [
    AppComponent,
    DatePickerSampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatCommonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
