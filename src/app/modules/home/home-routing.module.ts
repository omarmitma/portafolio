import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [ 
  { path:'',component: HomeComponent, children:[
    { path:'about', loadChildren: () => import('@modules/about-me/about-me.module').then(m => m.AboutMeModule) },
    { path:'studies', loadChildren: () => import('@modules/studies-certification/studies-certification.module').then(m => m.StudiesCertificationModule) },
    { path:'projects', loadChildren: () => import('@modules/projects/projects.module').then(m => m.ProjectsModule) },
    { path:'skills', loadChildren: () => import('@modules/skills/skills.module').then(m => m.SkillsModule) },
    { path:'**', redirectTo : 'about' }
  ]},
  { path:'**', redirectTo : '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
