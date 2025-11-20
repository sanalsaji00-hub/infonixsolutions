import { Component } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Dbservice } from '../../dbservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class Services {

  
   
   serviceform!:FormGroup

  constructor(private dbservice:Dbservice,private router:Router,private fb:FormBuilder){}
ngOnInit():void{ 
  this.serviceform=this.fb.group({
  companyname:[''],
  
});

  
  }
  onSubmit(){
    this.dbservice.servicereg(this.serviceform.value).then((confirmation:any)=>{ 
      if(confirmation.message == "Success")
      { 
        alert(' service Details Registered Successfully') 
        this.router.navigate(['Adminmaster/servicereg'])
     } 
     else 
     { 
      alert('Data do not insert,please check')
     }
  
  }
  
  
  )}

  

}
