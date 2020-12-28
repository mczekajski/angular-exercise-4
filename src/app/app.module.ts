import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DisplayPhotoComponent } from './display-photo/display-photo.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayPhotoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
