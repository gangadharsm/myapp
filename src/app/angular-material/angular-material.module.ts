import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
const AngularMaterial = [
  MatProgressBarModule,
  MatToolbarModule,
  MatButtonModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularMaterial
  ],
  exports: AngularMaterial
})
export class AngularMaterialModule { }
