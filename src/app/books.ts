import { Book } from "./models/book";

export let BOOKS: Book[] = [
    { id: 1, title: 'Dr Nice', bookAuthor: 'BookAuthor', year: '2005', publishpublishingHouse: 'House', author: '', reading: '' },
    { id: 2, title: 'Narco', bookAuthor: 'BookAuthor', year: '2004', publishpublishingHouse: 'House', author: '', reading: '' },
    { id: 3, title: 'Bombasto', bookAuthor: 'BookAuthor', year: '2002', publishpublishingHouse: 'House', author: '', reading: '' },
    { id: 4, title: 'Celeritas', bookAuthor: 'BookAuthor', year: '2005', publishpublishingHouse: 'House', author: '', reading: '' },
    { id: 5, title: 'Magneta', bookAuthor: 'BookAuthor', year: '2009', publishpublishingHouse: 'House', author: '', reading: '' },
    { id: 6, title: 'RubberMan', bookAuthor: 'BookAuthor', year: '2002', publishpublishingHouse: 'House', author: '', reading: '' },
    { id: 7, title: 'Dynama', bookAuthor: 'BookAuthor', year: '2001', publishpublishingHouse: 'House', author: '', reading: '' },
    { id: 8, title: 'Dr IQ', bookAuthor: 'BookAuthor', year: '2005', publishpublishingHouse: 'House', author: '', reading: '' },
    { id: 9, title: 'Magma', bookAuthor: 'BookAuthor', year: '2004', publishpublishingHouse: 'House', author: '', reading: '' },
    { id: 10, title: 'Tornado', bookAuthor: 'BookAuthor', year: '2004', publishpublishingHouse: 'House', author: '', reading: '' }
  ];

  localStorage.setItem('books', JSON.stringify(BOOKS));