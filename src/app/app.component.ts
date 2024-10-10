import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from "./login/login.component";
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, LoginComponent, NgIf, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyApp';
  isLogin: boolean = true;
  userName: string = "Ornab-95 is Good Boy";
  massage: string = "Welcome to my App";
  loginAttempts: number = 0;

  // Login data
  usernameInput: string = '';
  passwordInput: string = '';

  // Maximum login attempts allowed
  maxAttempts: number = 3;

  // Timer state
  timerRunning: boolean = false;
  remainingTime: number = 30;  // 30-second countdown timer

  // Count login attempts
  countLoginAttempt() {
    if (this.loginAttempts < this.maxAttempts) {
      this.loginAttempts++;
      console.log("Login Attempts: " + this.loginAttempts);
      console.log("Username: " + this.usernameInput);
      console.log("Password: " + this.passwordInput);

      if (this.loginAttempts >= this.maxAttempts) {
        this.startTimer();
      }
    }
  }

  // Start 30-second timer
  startTimer() {
    this.timerRunning = true;
    this.remainingTime = 30; // Reset the countdown to 30 seconds
    const intervalId = setInterval(() => {
      this.remainingTime--;
      if (this.remainingTime === 0) {
        clearInterval(intervalId);
        this.resetLoginAttempts();
      }
    }, 1000); // Update the timer every second
  }

  // Reset login attempts and timer
  resetLoginAttempts() {
    this.loginAttempts = 0;
    this.timerRunning = false;
    this.remainingTime = 30;
  }

  // Returns true if login attempts exceed the maximum allowed
  get isLoginDisabled(): boolean {
    return this.loginAttempts >= this.maxAttempts && !this.timerRunning;
  }

  // Remaining login attempts
  get loginAttempt(): number {
    return this.maxAttempts - this.loginAttempts;
  }
}
