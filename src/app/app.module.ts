import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PixelFormFieldModule } from "../../projects/pixel/src/lib/form-field/form-field.module";
import { PixelInputModule } from "../../projects/pixel/src/lib/input/input.module";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PixelFormFieldModule,
    PixelInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
