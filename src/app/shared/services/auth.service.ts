import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';

declare var google: any;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject = new BehaviorSubject<User | null>(null);
  public user$ = this.userSubject.asObservable();
  private clientId = '';

  constructor() {
    this.loadUserFromStorage();
  }

  initialize(clientId: string): void {
    this.clientId = clientId;
  }

  handleCredentialResponse(response: any): void {
    if (response.credential) {
      const decodedToken = this.decodeToken(response.credential);
      const user: User = {
        id: decodedToken.sub,
        email: decodedToken.email,
        name: decodedToken.name,
        picture: decodedToken.picture
      };
      
      this.setUser(user);
    }
  }

  private decodeToken(token: string): any {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return JSON.parse(jsonPayload);
  }

  private setUser(user: User): void {
    this.userSubject.next(user);
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  private loadUserFromStorage(): void {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      try {
        this.userSubject.next(JSON.parse(storedUser));
      } catch (e) {
        localStorage.removeItem('currentUser');
      }
    }
  }

  logout(): void {
    this.userSubject.next(null);
    localStorage.removeItem('currentUser');
    if (google?.accounts?.id) {
      google.accounts.id.disableAutoCallback();
    }
  }

  getCurrentUser(): User | null {
    return this.userSubject.value;
  }

  isAuthenticated(): boolean {
    return this.userSubject.value !== null;
  }
}
