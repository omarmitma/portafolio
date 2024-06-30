import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudiesCertificationComponent } from './page/studies-certification/studies-certification.component';

const routes: Routes = [
  { path:'', component:StudiesCertificationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudiesCertificationRoutingModule { }
