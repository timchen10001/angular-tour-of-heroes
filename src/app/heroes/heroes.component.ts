import { Component, OnInit } from '@angular/core';
import { IHero } from '../heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hero: IHero = {
    id: 1,
    name: 'Tim',
  };

}
