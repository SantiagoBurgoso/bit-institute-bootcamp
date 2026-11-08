import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink],
  template: `
    <section class="form-page">
      <h2>Create Account</h2>
      <p>Join Mini Store</p>

      <form (ngSubmit)="submit()">
        <input
          name="name"
          [(ngModel)]="name"
          placeholder="Full name"
          required
          minlength="2"
        >

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
          minlength="8"
        >

        <button type="submit">Register</button>
      </form>

      @if (error) {
        <p class="error">{{ error }}</p>
      }

      <p>
        Already registered?
        <a routerLink="/login">Login</a>
      </p>
    </section>
  `
})
export class Register {
  private auth = inject(AuthService);
  private router = inject(Router);

  name = '';
  email = '';
  password = '';
  error = '';

  submit() {
    this.auth.register({
      name: this.name,
      email: this.email,
      password: this.password
    }).subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.error =
          err.error?.message ||
          err.error?.errors?.[0]?.msg ||
          'Registration failed';
      }
    });
  }
}