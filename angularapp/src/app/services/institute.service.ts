import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Institute } from '../institute';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class InstituteService {

  public url="http://35.170.243.30:8080"
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  geturl = "http://35.170.243.30:8080/admin/viewInstitutes"
  getInstitutes(): Observable<Institute[]> {
    return this.http.get<Institute[]>(this.geturl)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  public addInstitute(institute:any){
    return this.http.post(`${this.url}/admin/addInstitute`,institute);

  }

  public getInstitute(instituteId){
    
    return this.http.get(`${this.url}/getInstitute/${instituteId}`);
  }

  

  
 public editInstitute(id,  Institute) {
  
    return this.http.put(`${this.url}/admin/editInstitute?instituteId=${id}`,Institute)
      
  }


  deleteurl = "http://35.170.243.30:8080/deleteInstitute"
  deleteInstitute(id: Number) {
    console.log(id)
    return this.http.delete(this.deleteurl + "/" + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }



  errorHandler(error: any) {
    console.log('error occurred')
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

  checkInstituteId(id){
    return this.http.get<any>(`${this.url}/checkid?instituteId=${id}`);
  }


}