import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRotingModule, rotingComponents} from './app-roting.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    rotingComponents
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRotingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
