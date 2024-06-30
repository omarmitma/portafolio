import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudiesCertificationRoutingModule } from './studies-certification-routing.module';
import { StudiesCertificationComponent } from './page/studies-certification/studies-certification.component';


@NgModule({
  declarations: [
    StudiesCertificationComponent
  ],
  imports: [
    CommonModule,
    StudiesCertificationRoutingModule
  ]
})
export class StudiesCertificationModule { }
