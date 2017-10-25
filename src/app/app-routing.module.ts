import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BooksComponent } from './books/books.component';
import { UsersComponent } from './users/users.component';
import { AboutThisComponent } from './about-this/about-this.component';
import { UserAddComponent } from './user-add/user-add.component';
import { BookAddComponent } from './book-add/book-add.component';

const routes: Routes = [
    { path: '', component: AboutThisComponent },
    { path: 'books', component: BooksComponent },
    { path: 'books/add', component: BookAddComponent },
    { path: 'users', component: UsersComponent },
    { path: 'users/add', component: UserAddComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
