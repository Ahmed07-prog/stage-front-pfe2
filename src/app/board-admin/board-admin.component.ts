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
  users: User[] = [];
  profiles :any=[
    {nom:'Aziz Ghandouri',time:'14/07/2022',addTime:'1',lieu:'Ben Arous'},
    {nom:'Malek Brahmi',role:'assuree',time:'11/06/2022',addTime:'2',lieu:'Mhamdia'},
    {nom:'Ahmed Abidi',role:'expert',time:'16/05/2022',addTime:'3',lieu:'Mourouj'},
    {nom:'Hedi Bouheli', role:'expert',time:'10/07/2022',addTime:'4',lieu:'Ben Arous'}
  ]
  constructor(private apiservice: ApiServicesService) { }

  
  getUserDetails(): void {
    // this.apiservice.getAllUsers().subscribe(user => {
    //   console.log(user)
    //   this.users = user;
    // });
  }
  ngOnInit(): void {
    this.getUserDetails();
  }

}

