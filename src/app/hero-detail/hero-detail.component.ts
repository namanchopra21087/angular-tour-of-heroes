import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  selectedHero:Hero;

  constructor(private route:ActivatedRoute,private location:Location,private heroService:HeroService,private messageService:MessageService) { }

  ngOnInit() {
    this.getHero();
    this.messageService.addMessage(this.selectedHero);
  
  }

  getHero(){
    const id=+this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(selectedHero=>this.selectedHero=selectedHero);
  }

  goBack():void{
    this.location.back();
  }
}
