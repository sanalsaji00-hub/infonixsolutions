import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Dbservice } from '../../dbservice';

@Component({
  selector: 'app-addpersonaldetails',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './addpersonaldetails.html',
  styleUrl: './addpersonaldetails.scss'
})
export class Addpersonaldetails {
   public TypeArray:any[]=[]; 
  public DesignationArray:any[]=[]
    public LocationArray:any[]=[];
    personaldetailsform!:FormGroup;
     selectedFiles?: FileList;
selectedFiles1?: FileList;
currentFile?: any;
currentFile1? :any;
message = '';
fileInfos?: Observable<any>;



     constructor(private fb:FormBuilder,private dbservice:Dbservice,private router:Router){}
  
    ngOnInit():void{ 
     this.personaldetailsform=this.fb.group({
        typeid: [''], 
        designation:[''], 
        name: [''],
       dob: [''],
       gender:[''],
       maritulstatus:[''],
       email:[''],
       mobno:[''],
       religion:[''],
       state:[''],
       country:[''],
       ktet:[''],
       category:[''],
       qualification:[''],
       Schoolname:[''],
       Schoolplace:[''],
       Board:[''],
       plustwo:[''],
       Institutionname:[''],
       Institutionplace:[''],
       university:[''],
       ug:[''],
       Collegename:[''],
       Collegeplace:[''],
       university1:[''],
       pg:[''],
       Collegename2:[''],
       Collegeplace2:[''],
       university2:[''],
       phd:[''],
       exp:[''],
       Institutename:[''],
       Instituteplace:[''],
       University3:[''],
       expy:[''],
       totalexp:[''],
       lastworked:[''],
       fromdate:[''],
       todate:[''],
       reason:[''],
        productimage:[''],
       productimage1:[''],
      
      });
      this.dbservice.typeview().then((data:any)=>{
       console.log(this.TypeArray);
     this.TypeArray=data;
     });
      this.dbservice.designationview().then((data:any)=>{
       console.log(this.DesignationArray);
     this.DesignationArray=data;
     });
   
   
    }


    selectFile(event: any): void {
this.selectedFiles= event.target.files;
}
selectFile1(event: any): void {
this.selectedFiles1 = event.target.files;
}
onSubmit(){
if (this.selectedFiles && this.selectedFiles1) {
// console.log(this.selectedFiles);
const file: File | null = this.selectedFiles.item(0);
const file1: File | null = this.selectedFiles1.item(0);
if (file) {
this.currentFile = file;
this.currentFile1 = file1;
this.dbservice.upload(this.currentFile).subscribe(
(event: any) => {
this.message = event.body.message; }) ;
this.dbservice.upload(this.currentFile1).subscribe(
(event: any) => {
this.message = event.body.message; }) ;
} }
this.personaldetailsform.value.productimage=this.currentFile.name;
 this.personaldetailsform.value.productimage1=this.currentFile1.name;
// console.log(this.productimage);
this.dbservice.Personaldata(this.personaldetailsform.value)
.then((confirmation:any)=>
{console.log(confirmation);
if(confirmation.message === "Success"){
    const id = confirmation.insertId;
alert('Application Registration Compleated Successfully')
//  this.router.navigate(['/applicationview']);


 setTimeout(() => {
          this.router.navigate(['/applicationview',id]);
        }, 3000);
      } else {
        alert('Submission failed, please try again!');
      }
    })
    .catch((error) => {
      console.error(error);
      alert('Error while submitting data!');
    });

console.log(this.personaldetailsform.value)


}}

 





