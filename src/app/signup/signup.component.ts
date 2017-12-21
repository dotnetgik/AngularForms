import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  valuesubmited:string="";

  ngOnInit() {
  }


  registerUser(form:NgForm)
  {
    this.valuesubmited=form.value;
  console.log(form);
  //form.reset();
  }
}
