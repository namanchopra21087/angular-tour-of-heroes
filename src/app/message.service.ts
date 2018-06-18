import { Injectable } from '@angular/core';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  message:String;
  constructor() { }

  addMessage(hero:Hero):void{
    this.message=hero.name+" Details Fetched Successfully";
  }

  clear():void{
    this.message="";
  }
}
