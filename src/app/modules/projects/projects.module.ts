import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './pages/projects/projects.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
