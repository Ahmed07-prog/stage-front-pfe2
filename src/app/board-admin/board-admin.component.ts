import { Component, OnInit, ValueProvider } from '@angular/core';
import { UserService } from '../_services/user.service';
import { ApiServicesService } from '../_services/api.services.service';
import { User } from '../models/User';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  content?: string;


  users: User[] = [];

  constructor(private apiservice: ApiServicesService) { }

  
  getUserDetails(): void {
    this.apiservice.getAllUsers().subscribe(user => {
      this.users = user;
    });
  }
  ngOnInit(): void {
    this.getUserDetails();
  }

}

