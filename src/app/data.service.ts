import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSource = new BehaviorSubject('Default Message');

  currentMessage = this.messageSource.asObservable();

  constructor() { }

  

  newdata(newdata)
  {
     this.messageSource.next(newdata);
   }
 
}
