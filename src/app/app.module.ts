import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SmoothScrollToDirective, SmoothScrollDirective } from "ng2-smooth-scroll";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SmoothScrollDirective,
    SmoothScrollToDirective
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
