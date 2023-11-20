import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
   username:string=''
   password:string=''
   message:string=''
   constructor(private service:UserService,private r:Router){
      
   }
   PerformLogin(){
    if(this.service.PerformLogin(this.username,this.password)){
      this.message = 'Login Success'
      // show students view to user   
      this.r.navigate(['students']) //this is programmatic navigation
    }
    else
    {
      this.message = 'Login Failed'
    }
   }
   
}