import { NgModule } from '@angular/core';
import { BooksComponent } from './books/books.component';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './book/add/add.component';
import { LoginComponent } from './login/login.component';
import { EditComponent } from './book/edit/edit/edit.component';

const routes: Routes = [
  { path: 'books', component: BooksComponent },
  { path: '', component: BooksComponent },
  { path: 'add', component: AddComponent },
  { path: 'login', component: LoginComponent },
  { path: 'edit/:id', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
