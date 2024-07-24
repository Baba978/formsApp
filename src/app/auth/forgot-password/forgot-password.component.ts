// forgot-password.component.ts
import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  email: string;

  constructor(private location: Location) {
    this.email = '';
  }

  onSubmit() {
    // Logique de soumission du formulaire
    console.log('Email:', this.email);
  }

  goBack() {
    this.location.back();
  }
}

