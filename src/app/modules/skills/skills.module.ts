import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsComponent } from './pages/skills/skills.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    SkillsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SkillsRoutingModule
  ]
})
export class SkillsModule { }
