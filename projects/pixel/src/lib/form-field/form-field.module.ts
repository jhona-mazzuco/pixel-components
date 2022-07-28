import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PixelFormFieldComponent } from './form-field.component';


@NgModule({
  declarations: [PixelFormFieldComponent],
  imports: [
    CommonModule
  ],
  exports: [PixelFormFieldComponent]
})
export class PixelFormFieldModule {
}
