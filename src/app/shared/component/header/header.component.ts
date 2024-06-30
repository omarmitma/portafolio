import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  isLightTheme = false;

  ngOnInit(): void {
    this.initTyped();
    this.initTheme();
  }
  
  //Obtener el tema
  initTheme(){
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
      this.isLightTheme = savedTheme === "dark" ? false : true ;
    } else {
      document.documentElement.setAttribute('data-theme', 'dark'); // Tema por defecto
    }
  }
  //
  initTyped(){
    var typed = new Typed(".typed-element", {
      strings: ["Web Developer", "Frelance","Full Stack"],
      typeSpeed: 25,
      backSpeed: 40,
      backDelay: 1000,
      startDelay: 60,
      loop: true,
    });
  }

  //Cambiar tema
  toggleTheme() {
    
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  }

}
