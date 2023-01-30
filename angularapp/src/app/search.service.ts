import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  message:string;
  private ms=new BehaviorSubject('');
  cm=this.ms.asObservable();
   constructor() { }
   setmes(data){
     this.ms.next(data);
     console.log("ser"+this.message);
}
}
