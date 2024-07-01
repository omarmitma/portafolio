import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProjectsModel } from '@core/models/projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit{

  dataProject:ProjectsModel[] = [];
  dataProjectFilter:ProjectsModel[] = [];
  tipoActive:number = 1;
  
  constructor(private httpClient:HttpClient){}

  ngOnInit(): void {
    this.getDataProject();
  }
  //
  getDataProject(){
    this.httpClient.get<any[]>("assets/Json/projects.json").subscribe(data=> {
      this.dataProject = data;
      this.filterProject();
    });
  }

  //
  changeProject(tipo:number){
    this.tipoActive = tipo;
    this.filterProject();
  }

  filterProject(){
    if(this.tipoActive === 1){
      this.dataProjectFilter = this.dataProject;
    }
    else{
      this.dataProjectFilter = this.dataProject.filter(d => d.tipo === this.tipoActive);
    }
  
  }
}
