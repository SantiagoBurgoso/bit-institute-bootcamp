import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  template: `
    <section class="form-page">
      <h2>Welcome Back</h2>
      <p>Login to your Mini Store account</p>

      <form (ngSubmit)="submit()">
        <input
          name="email"
          [(ngModel)]="email"
          type="email"
          placeholder="Email"
          required
        >

        <input
          name="password"
          [(ngModel)]="password"
          type="password"
          placeholder="Password"
          required
        >

        <button type="submit">Login</button>
      </form>

      @if (error) {
        <p class="error">{{ error }}</p>
      }

      <p>
        Don't have an account?
        <a routerLink="/register">Register</a>
      </p>
    </section>
  `
})
export class Login {
  private auth = inject(AuthService);
  private router = inject(Router);

  email = '';
  password = '';
  error = '';

  submit() {
    this.auth.login({
      email: this.email,
      password: this.password
    }).subscribe({
      next: (response) => {
        this.auth.saveToken(response.token);
        this.router.navigate(['/products']);
      },
      error: () => {
        this.error = 'Invalid credentials';
      }
    });
  }
}