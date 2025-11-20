import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Dbservice } from '../../dbservice';

@Component({
  selector: 'app-addgallery',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './addgallery.html',
  styleUrl: './addgallery.scss'
})
export class Addgallery {
 public TypeArray:any[]=[]; 
  public DesignationArray:any[]=[]
    public LocationArray:any[]=[];
    galleryform!:FormGroup;
     selectedFiles?: FileList;
  currentFile?: any;

message = '';
fileInfos?: Observable<any>;



     constructor(private fb:FormBuilder,private dbservice:Dbservice,private router:Router){}
  
    ngOnInit():void{ 
     this.galleryform=this.fb.group({
        galleryname: [''], 
        image:[''], 
       
      
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

onSubmit(){
if (this.selectedFiles) {
// console.log(this.selectedFiles);
const file: File | null = this.selectedFiles.item(0);
if (file) {
this.currentFile = file;

this.dbservice.upload(this.currentFile).subscribe((event: any) => {
this.message = event.body.message; }) ;

} }
this.galleryform.value.productimage=this.currentFile.name;
 
this.dbservice.addgallery(this.galleryform.value).then((confirmation:any)=>{
  console.log(confirmation);
if(confirmation.message === "Success"){
   
alert('Application Registration Compleated Successfully')
//  this.router.navigate(['/applicationview']);

}
})
}
}

 





