import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit {

  private apiUrl = 'https://secret-island-80024.herokuapp.com/users';
  constructor() { }

  ngOnInit() {
  }

}
