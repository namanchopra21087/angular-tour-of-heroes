import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn:'root'
})
export class HeroService {

  messageService:MessageService;
  constructor(messageService:MessageService) {
    this.messageService=messageService;
   }
  getHeroes():Observable<Hero[]>{
    return of(HEROES);
  }
}
