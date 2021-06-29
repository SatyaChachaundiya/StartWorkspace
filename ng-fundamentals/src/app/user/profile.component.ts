import { Component, OnInit, Inject } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthService } from './auth.service'
import { TOASTR_TOKEN, Toastr } from '../common/toastr.service'

@Component({
  templateUrl:'./profile.component.html',
  styles:[`
  em { float:right; color:#E05C65; padding-left:10px; },
  .error input { background-color:#E3C3C5; },
  .error ::-webkit-input-placeholder {color:#999;},
  .error ::-moz-placeholder {color:#999;},
  .error :-moz-placeholder {color:#999;},
  .error :ms-input-placeholder {color:#999;},
  `]
})


export class ProfileComponent implements OnInit{

  profileForm:FormGroup
  private firstName:FormControl
  private lastName:FormControl

  constructor(
    private authser:AuthService, 
    private route:Router,
    @Inject(TOASTR_TOKEN) private toastr: Toastr){

  }

  ngOnInit(){

    this.firstName = new FormControl(this.authser.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*') ])
    this.lastName = new FormControl(this.authser.currentUser.lastName, [Validators.required, Validators.pattern('[a-zA-Z].*') ])
    
    this.profileForm =  new FormGroup({
      firstName:this.firstName,
      lastName:this.lastName
    })

  }

  validatefirstname(){
    if(this.firstName.valid && this.firstName.untouched){
      return true
    }
    else{
      return false
    }
  }

  validatelastname(){
    if(this.lastName.valid && this.lastName.untouched){
      return true
    }
    else{
      return false
    }
  }

  saveprofile(pform){
    console.log(this.profileForm.value);
    if(this.profileForm.valid){
      // console.log(pform);
      this.authser.updateCurrentuser(pform.firstName, pform.lastName)
      // this.route.navigate(['events'])
      this.toastr.success('Profile Saved')
    }
  }

  cancel(){
    this.route.navigate(['events'])
  }
}