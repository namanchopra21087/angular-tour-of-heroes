import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  message:String;
  constructor() { }

  addMessage():void{
    this.message="Heroes Details Fetched Successfully";
  }
}
