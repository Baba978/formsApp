import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  fullName: string = '';
  email: string = '';
  username: string = '';
  password: string = '';
  terms: boolean = false;

  constructor(private location: Location) {}

  ngOnInit() {
    console.log('RegisterComponent initialized');
  }

  onSubmit() {
    console.log('Form submitted');
    console.log('Full Name:', this.fullName);
    console.log('Email:', this.email);
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    console.log('Terms accepted:', this.terms);
  }

  goBack() {
    this.location.back();
  }
}
