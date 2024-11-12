import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router for navigation

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  // styleUrls: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

credentials = [
  { id: "ornab@gmail.com", pass: "admin" },
  { id: "2020000000099@gmail.com", pass: "nazmul" }
];

  title: string = 'Login To MyApp';

  constructor(private router: Router) {}

  onSubmit(): void {
    const validCredential = this.credentials.find(cred => cred.id === this.email && cred.pass === this.password);
    if (validCredential) {
      alert('Login successful! ' + this.email);
    } else {
      alert('Invalid credentials. Please try again.' + this.email);
    }
    console.log(`ID: ${this.email}, Pass: ${this.password}`);
  }
}
