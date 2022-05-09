import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private route: ActivatedRoute, @Inject(DOCUMENT) private document: Document, private bookService: BookService) { }

  bookModel: any = {
    title: '',
    author: '',
    year: '',
    publishpublishingHouse: ''
  }

  book?:Book
  id?:number

  ngOnInit(): void {
   this.id = Number(this.route.snapshot.paramMap.get('id'));
   let books = JSON.parse(localStorage.getItem('books') || "");
   this.bookModel = books[this.id];
  }

  save() {
    this.book = {
      title: this.bookModel.title,
      bookAuthor: this.bookModel.author,
      author: this.bookModel.name,
      year: this.bookModel.year,
      publishpublishingHouse: this.bookModel.publishpublishingHouse,
      reading: '',
      id : this.id || 0
    };

    this.bookService.updateBooks(this.book);
    this.document.location.href = 'http://localhost:4200/books';
  }
}
