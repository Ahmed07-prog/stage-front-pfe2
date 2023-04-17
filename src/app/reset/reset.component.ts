import { Component, OnInit } from '@angular/core';
import { ForgotService } from '../_services/forgot.service';
import { StorageService } from '../_services/storage.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent {
  failed =false;
  sent =false;
  errorMessage ='';
  response='';
  form :any={
    email:null
  }
  constructor (private storage:StorageService ,private  forgot:ForgotService, private router:Router,private activatedRoute:ActivatedRoute){}
  onSend():void{
    const {email} = this.form  
    this.forgot.forgot(email).subscribe({
      next: data => {
        const reset= data.reset_token;
        console.log(reset);
        this.storage.saveResetToken(reset);

        this.sent = true;
        this.router.navigate(['/resetPassword'])
      },
      error:err => {
        this.errorMessage = err.error.message;
        this.failed = true;
      }
      
    })
  }
  }
