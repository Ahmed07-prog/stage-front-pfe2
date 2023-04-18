import { Component } from '@angular/core';
import { StorageService } from '../_services/storage.service';
import { ForgotService } from '../_services/forgot.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  sent = false;
  errorMessage=''
  form :any = {
    newPassword: null,
    cnfrPassword : null
  }
  
  constructor(private  forgot:ForgotService, private router:Router){}
onReset():void{
  const {newPassword, cnfrPassword} = this.form;
  if (newPassword == cnfrPassword){
    this.forgot.sendReset(cnfrPassword).subscribe({
      next: () => {
        this.router.navigate(['/login'])
        
        
      },
      error:err => {
        this.errorMessage = err.error.message;
        this.sent = false;
      }
      
    })
      
    
  }
}
}
