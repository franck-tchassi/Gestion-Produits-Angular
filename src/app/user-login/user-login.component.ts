import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { LoginuserService } from '../loginuser.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit{
  
  user: User = new User();
  constructor(private loginuserservice: LoginuserService){}

  ngOnInit(): void {
      
  }
  userLogin(){
    console.log(this.user)
    this.loginuserservice.loginUser(this.user).subscribe(data=>{
      alert("Login succesfully")
    }, Error=>alert("nom utilisateur ou mot de passe incorrect")
    )
  }

}
