import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  contactMethods=[
    {id:'1', name:'Email'},
    {id:'2', name:'phone'},
    {id:'3', name: 'altnumber'}
  ];

  log(x){
    console.log(x);
  }
  onSubmit(f){
    console.log(f);

  }

}
