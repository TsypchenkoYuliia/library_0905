import { Injectable } from '@angular/core';
import { Book } from 'src/app/models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books = JSON.parse(localStorage.getItem('books') || "");

  constructor() { }

  updateBooks(book: Book){
    this.books.push(book);
    localStorage.removeItem('books');
    localStorage.setItem('books', JSON.stringify(this.books));
  }
}
