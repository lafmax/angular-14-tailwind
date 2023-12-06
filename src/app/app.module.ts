import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, ChangeDateDirective } from './app.component';
import { NgComponentOutlet } from '@angular/common';
import { Dynamic1Component } from './dynamic1/dynamic1.component';
import { Dynamic2Component } from './dynamic2/dynamic2.component';

@NgModule({
  declarations: [
    ChangeDateDirective,
    AppComponent,
    Dynamic1Component,
    Dynamic2Component,
  ],
  imports: [
    NgComponentOutlet,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
