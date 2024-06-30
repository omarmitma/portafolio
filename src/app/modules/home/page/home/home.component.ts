import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  headerActive:boolean = false;

  openResponsiveHeader(){
    this.headerActive = this.headerActive ? false : true;
  }
}
