import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthService } from './auth.service'

@Component({
  templateUrl:'./profile.component.html',
})


export class ProfileComponent implements OnInit{
  profileForm:FormGroup

  constructor(private authser:AuthService, private route:Router){

  }

  ngOnInit(){

    let firstName = new FormControl(this.authser.currentUser.firstName)
    let lastName = new FormControl(this.authser.currentUser.lastName)
    
    this.profileForm =  new FormGroup({
      firstName:firstName,
      lastName:lastName
    })

  }

  saveprofile(pform){
    console.log(pform);
    this.authser.updateCurrentuser(pform.firstName, pform.lastName)
    this.route.navigate(['events'])
  }

  cancel(){
    this.route.navigate(['events'])
  }
}