import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Dbservice { 
  constructor(private http:HttpClient){}

  prodURL="https://infonixsolutions.onrender.com"  // before hosting make sure to change devURL to prodURL

  devURL = this.prodURL;
  
  typeview(){
    
    
  return this.http.get(`${this.devURL}/typeview`).toPromise();


  }

login(data: any) {
    return this.http.post(`${this.devURL}/login`, data).toPromise()
  }


   reportdatewise(data: any) {
    return this.http.post(`${this.devURL}/reportdatewise`, data).toPromise()
  }
  getdpersonaldetailsbyid(data:any){
    return this.http.post(`${this.devURL}/getdpersonaldetailsbyid`, data).toPromise()

  }
  designationview(){
    return this.http.get(`${this.devURL}/designationview`).toPromise();

  }
  upload(file: File): Observable<HttpEvent<any>> {
const formData: FormData = new FormData();
formData.append('file', file);
const req = new HttpRequest('POST', `${this.devURL}/upload`, 
formData, {
reportProgress: true,
responseType: 'json'
});
return this.http.request(req);
}
Productdata(data:any)
{
return this.http.post(`${this.devURL}/productreg`,data).toPromise()
}

Personaldata(data:any){
    return this.http.post(`${this.devURL}/Personaldata`, data).toPromise()

  }
  getApplicationById(data: any) {
  return this.http.post(`${this.devURL}/getApplicationById`,data).toPromise();
}
advancedReportSearch(data: any) {
  return this.http.post(`${this.devURL}/advancedreportsearch`, data).toPromise();
}
getalldata(){
  return this.http.get(`${this.devURL}/getalldata`).toPromise();
}
addgallery(data:any){
  return this.http.post(`${this.devURL}/addgallery`, data).toPromise()

}


servicereg(data:any){
  return this.http.post(`${this.devURL}/servicereg`, data).toPromise()
}
}
