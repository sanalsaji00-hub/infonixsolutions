import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Dbservice } from '../../dbservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guestlogin',
  imports: [ReactiveFormsModule],
  templateUrl: './guestlogin.html',
  styleUrl: './guestlogin.scss'
})
export class Guestlogin {

   public LoginArray:any[]=[];
  public loginformgroup: any;
  constructor(private fb:FormBuilder,private router:Router,private dbservice:Dbservice) { }

 ngOnInit() {
    this.loginformgroup = this.fb.group({
      username: [''],
      password: ['']
    });
  }
     Onsubmit(){
    // console.log(this.LoginFormGroup.value)
    this.dbservice.login(this.loginformgroup.value).then((data:any)=>{
    this.LoginArray=data;
    // console.log(data)
    if(data==""){
    alert ('Please Enter Valid username and password')
    this.router.navigate(['/guestmaster/login'])
    return
    }
    else {
    // console.log(this.LoginArray)
    var role = this.LoginArray[0].role;
    // console.log(role)
    localStorage.setItem("loginid",this.LoginArray[0].loginid);
    localStorage.setItem("username",this.LoginArray[0].username)
    var status = this.LoginArray[0].status;
    // console.log(status)
    if(role == "Admin")
    {
    this.router.navigate(['/adminmaster/adminhome'])

    }
    else if(role == "Customer")
    {
    this.router.navigate(['/customermaster/customerhome'])
    }
  
    else 
    { 
    alert('you are not an authorised person..')
    }
    }
    })
    }
}



