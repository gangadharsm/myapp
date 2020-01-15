import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  RegistrationForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createRegistrationForm();
  }

  createRegistrationForm() {
    this.RegistrationForm = this.fb.group({
      emailId: [''],
      password: [''],
      confirmPassword: ['']
    });
  }

}
