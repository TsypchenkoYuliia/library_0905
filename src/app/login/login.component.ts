import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { User } from '../models/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user?: User
  userModel: any = {
    login: '',
    password: '',
  }

  constructor(@Inject(DOCUMENT) private document: Document) {

  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.user = {
      name: this.userModel.name,
      address: this.userModel.address,
      birthday: this.userModel.birthday,
      phone: this.userModel.phone

    };
    localStorage.setItem('user',JSON.stringify(this.user));
    this.document.location.href = 'http://localhost:4200/books';
  }
}
