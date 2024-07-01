import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SkillsModel } from '@core/models/skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit{

  skillsData:SkillsModel[] = [];

  constructor(private httpClient:HttpClient){}

  ngOnInit(): void {
    this.getDataStudies();
  }

  getDataStudies(){
    this.httpClient.get<SkillsModel[]>("assets/Json/skills.json").subscribe(data=> {
      this.skillsData = data;
    });
  }
}
