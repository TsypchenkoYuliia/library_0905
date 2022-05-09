import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { User } from 'src/app/models/user';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  user?:User;
  newBook?:Book;
  booksLenght = JSON.parse(localStorage.getItem('books') || "").length;
  
  constructor(@Inject(DOCUMENT) private document: Document, private bookService: BookService) { }

  bookModel: any = {
    title: '',
    author: '',
    year: '',
    publishpublishingHouse: ''
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') || "");
  }

  save() {
    this.newBook = {
      title: this.bookModel.title,
      bookAuthor: this.bookModel.author,
      author: this.user?.name || "",
      year: this.bookModel.year,
      publishpublishingHouse: this.bookModel.publishpublishingHouse,
      reading: '',
      id : this.booksLenght + 1
    };

    this.bookService.updateBooks(this.newBook);
    this.document.location.href = 'http://localhost:4200/books';
  }
}
