import { Component } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { ApiServicesService } from '../_services/api.services.service';

@Component({
  selector: 'app-add-expert',
  templateUrl: './add-expert.component.html',
  styleUrls: ['./add-expert.component.css']
})
export class AddExpertComponent {
  form: any = {
    firstName:null,
    lastName:null,
    username: null,
    cin:null,
    email: null,
    phone:null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private apiService: ApiServicesService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const {firstName,lastName, username, cin, email, phone, password } = this.form;

    this.apiService.addExpert(firstName,lastName, username, cin, email, phone, password).subscribe({
      
    });
  }
}
