import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private apiUrl = 'https://secret-island-80024.herokuapp.com/users/';
  users: any = {};
  inputName: string ='';
  constructor(private http : Http ) {
    console.log('Lets go to find users data ... '); 
    this.getUsers();
    this.getData();
  }

  getData(){  
    if (this.inputName != '') {
      return this.http.get(this.apiUrl+'by-name/'+this.inputName)
      .map((res : Response) => res.json());
    } else {
      return this.http.get(this.apiUrl)
      .map((res : Response) => res.json());
    }
  }

  getUsers(){
    
    console.log('Connecting to '+this.apiUrl);
    console.log('Retrieving users data');
    this.getData().subscribe(data => {
      console.log(data);
      this.users = data;
    })
  }


  ngOnInit() {
  }

}
