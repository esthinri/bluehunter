import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { UsersComponent } from './users/users.component';
import { AboutThisComponent } from './about-this/about-this.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    UsersComponent,
    AboutThisComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [BooksComponent, UsersComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
