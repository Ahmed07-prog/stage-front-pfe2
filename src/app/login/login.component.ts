import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  role = "";
  constructor(private authService: AuthService, private storageService: StorageService) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.role = this.storageService.getUser().role;
    }
  }

  onSubmit(): void {
    const { email, password } = this.form;  
    console.log(email, password);

    this.authService.login(email, password).subscribe({
      next: data => {
        const accessToken = data.access_token;
        const user = data.user;
        // sessionStorage.setItem('access_token', accessToken);
        // sessionStorage.setItem('user', JSON.stringify(user));
        this.storageService.saveUser(user);
        this.storageService.saveToken(accessToken);
        sessionStorage.removeItem('token');

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.role = user.role;
        this.reloadPage();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }
}
