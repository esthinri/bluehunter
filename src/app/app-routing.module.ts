import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BooksComponent } from './books/books.component';
import { UsersComponent } from './users/users.component';
import { AboutThisComponent } from './about-this/about-this.component';


const routes: Routes = [
    { path: '', component: AboutThisComponent },
    { path: 'books', component: BooksComponent },
    { path: 'users', component: UsersComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
