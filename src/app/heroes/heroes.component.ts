import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero:Hero;
  heroes:Hero[];
  heroService:HeroService;
  messageService:MessageService;
  constructor(heroService:HeroService,messageService:MessageService) { 
    this.heroService=heroService;
    this.messageService=messageService;
  }

  ngOnInit() {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes=heroes);
  }
  onSelect(hero:Hero):void{
    this.messageService.addMessage(hero);
    this.selectedHero=hero;
  }

}
