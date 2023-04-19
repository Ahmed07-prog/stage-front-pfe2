import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { ApiServicesService } from '../_services/api.services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;
  constructor(private userService: UserService, private apiService:ApiServicesService) { }
  constats: any = [
    {
        "constat_id": 1,
        "constat_place": "tunisa",
        "constat_date": "2023-12-07"
    },
    {
        "constat_id": 2,
        "constat_place": "tunisa",
        "constat_date": "2023-12-07"
    },
    {
        "constat_id": 3,
        "constat_place": "tunisa",
        "constat_date": "2023-12-07"
    },
    {
        "constat_id": 4,
        "constat_place": "tunisa",
        "constat_date": "2023-12-07"
    }
];


// for (let i = 0; i < this.constats.length; i++) {
//   console.log('Object ' + (i+1) + ': ' + JSON.stringify(this.constats[i]));
// }

  ngOnInit(): void {
    this.apiService.getConstat().subscribe({
      next : data =>{
        console.log(data)
      }
    }
    );
  
  }
}
