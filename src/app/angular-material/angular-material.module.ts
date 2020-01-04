import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressBarModule} from '@angular/material/progress-bar';
const AngularMaterial = [
  MatProgressBarModule
 ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularMaterial
  ],
  exports : AngularMaterial
})
export class AngularMaterialModule { }
