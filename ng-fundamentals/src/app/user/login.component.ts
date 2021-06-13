import { Component } from '@angular/core'
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  templateUrl:'./login.component.html'
})

export class LoginComponent {
       userName
       password
       mouseoverlogin

       constructor(private authService:AuthService, private route:Router){

       }

       login(formValues){
           this.authService.logiUser(formValues.userName,formValues.password)  
           this.route.navigate(['events'])            
       }

       cancel(){
          this.route.navigate(['events'])
       }
}
