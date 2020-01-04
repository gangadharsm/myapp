import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class HeaderFooterModule { }
