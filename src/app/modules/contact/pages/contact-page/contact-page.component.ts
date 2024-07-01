import { Component, ElementRef, OnInit } from '@angular/core';

import { FormControl,FormGroup, Validators } from '@angular/forms';
import { DataDbService } from '@core/services/data-db.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  slideAsunto:boolean=false;
  textAsunto:string = "Frontend";


  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  createFormGroup(){
    return new FormGroup({
      name:new FormControl('',[Validators.required,Validators.minLength(2)]),
      email:new FormControl('',[Validators.required,Validators.pattern(this.emailPattern)]),
      asunto:new FormControl('',[Validators.required,Validators.minLength(5)]),
      message:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(350)]),
    })
  }
  
  contactForm:FormGroup;
  
  constructor(private el: ElementRef, private dbData:DataDbService) { 
    this.contactForm = this.createFormGroup();
  }
 
  ngOnInit(): void {
    this.styleInputContact();
  }

  //Dar los estilos correspondientes a los inputs cada que tiene el focus o blur
  styleInputContact(){
    const inputList = [].slice.call((<HTMLElement>this.el.nativeElement).querySelectorAll('.input'));
    inputList.forEach((input: HTMLElement) => {
         input.addEventListener('focus', () => {
           input.parentElement?.classList.add('labelInputFocus');
           input.parentElement?.classList.remove('labelInputTop');
          });
         input.addEventListener('blur', () => {
           if((<HTMLInputElement>input).value.length == 0)input.parentElement?.classList.remove('labelInputFocus');
           else {
            input.parentElement?.classList.remove('labelInputFocus')
            input.parentElement?.classList.add('labelInputTop')
           };
         });
    });
  }

  selectAsunto(){
    if(this.slideAsunto) this.slideAsunto = false;
    else this.slideAsunto = true;
  }

  changeAsunto(text:string){
    this.textAsunto = text;
  }

  onResetForm(){
    this.contactForm.reset();
  }
  onSaveForm(){
    if(this.contactForm.valid){
      this.dbData.saveMessage(this.contactForm.value);
      alert("Mensaje enviado");
      this.styleInputContact();
      this.onResetForm();
    }
    
  }

  get name(){return this.contactForm.get('name');}
  get email(){return this.contactForm.get('email');}
  get asunto(){return this.contactForm.get('asunto');}
  get message(){return this.contactForm.get('message');}
}
