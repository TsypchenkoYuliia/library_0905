import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { BOOKS } from '../books';
import { Book } from '../models/book';
import { User } from '../models/user';
import { AuthService } from '../services/auth/auth.service';
import { BookService } from '../services/book/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books?: Book[];
  selectedBook?: Book;
  user?: User;

  constructor(private authService: AuthService, @Inject(DOCUMENT) private document: Document, private bookService: BookService) { }

  ngOnInit(): void {
    if(localStorage.getItem('books')){
      this.books = JSON.parse(localStorage.getItem('books') || "");
    }
    else{
      this.books = BOOKS;
    }

    if(localStorage.getItem('user')){
      this.user = JSON.parse(localStorage.getItem('user') || "") || this.user;
    }
  }

  onRead(book: Book): void {
    this.selectedBook = book;
    if(!this.authService.isAuthorize()){
      this.document.location.href = 'http://localhost:4200/login';
    }
    else{
      this.selectedBook.reading = this.user?.name || "";
    }
  }

  onReturn(book: Book): void {
    book.reading = "";
    this.bookService.updateBooks(book);
  }

  onEdit(book: Book): void {
    this.document.location.href = 'http://localhost:4200/edit/'+ book.id;
  }
}
