import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BROWSER_STORAGE } from '../storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiBaseUrl = 'http://localhost:3000/api';

  constructor(
    private http: HttpClient,
    @Inject(BROWSER_STORAGE) private storage: Storage | null
  ) {}

  login(user: any) {
    return this.http.post<any>(`${this.apiBaseUrl}/login`, user);
  }

  saveToken(token: string): void {
    this.storage?.setItem('travlr-token', token);
  }

  getToken(): string | null {
    return this.storage?.getItem('travlr-token') ?? null;
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    this.storage?.removeItem('travlr-token');
  }
}