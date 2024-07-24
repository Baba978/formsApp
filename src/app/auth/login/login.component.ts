// login.component.ts
import { Component } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
[x: string]: any;
  username: string;
  password: string;
togglePaused: any;

  constructor(private location: Location) {
    this.username = '';
    this.password = '';
  }

  onSubmit() {
    // Logique de soumission du formulaire
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }

  loginWithGoogle() {
    console.log('Login with Google');
    // Ajoutez ici la logique de connexion avec Google
  }

  loginWithApple() {
    console.log('Login with Apple');
    // Ajoutez ici la logique de connexion avec Apple
  }

  goBack() {
    this.location.back();
  }
}
