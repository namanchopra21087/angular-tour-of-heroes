import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  getMessage():String{
    return "Heroes Details Fetched Successfully";
  }
}
