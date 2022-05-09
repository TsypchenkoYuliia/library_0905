import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuthorize(): boolean {
    const user = localStorage.getItem('user');
    if (user) {
      return true;
    }
    else
      return false;
  }
}
