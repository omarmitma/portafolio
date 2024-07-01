import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CertificadoModel } from '@core/models/certificado';
import { StudiesModel } from '@core/models/studies';

@Component({
  selector: 'app-studies-certification',
  templateUrl: './studies-certification.component.html',
  styleUrls: ['./studies-certification.component.scss']
})
export class StudiesCertificationComponent implements OnInit{
  
  studiesData:StudiesModel[] = [];
  certificacionesData:CertificadoModel[] = [];

  constructor(private httpClient:HttpClient){}

  ngOnInit(): void {
    this.getDataStudies();
    this.getDataCertificado();
  }

  getDataStudies(){
    this.httpClient.get<any[]>("assets/Json/studies.json").subscribe(data=> {
      this.studiesData = data;
    });
  }

  getDataCertificado(){
    this.httpClient.get<any[]>("assets/Json/certificaciones.json").subscribe(data=> {
      this.certificacionesData = data;
    });
  }
}
