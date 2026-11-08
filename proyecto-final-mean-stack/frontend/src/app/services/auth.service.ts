import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);

  private url = 'http://localhost:3000/api/auth';

  register(data: {
    name: string;
    email: string;
    password: string;
  }) {
    return this.http.post(`${this.url}/register`, data);
  }

  login(data: {
    email: string;
    password: string;
  }) {
    return this.http.post<{ token: string }>(
      `${this.url}/login`,
      data
    );
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string {
    return localStorage.getItem('token') || '';
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout() {
    localStorage.removeItem('token');
  }
}