import { Component, OnInit } from '@angular/core';
import { IHero } from '../heroes';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  hero: IHero = {
    id: 1,
    name: 'Tim',
  };

  heroes = HEROES;

  constructor() { }

  ngOnInit(): void {
  }


  selectedHero: IHero = this.hero;
  onSelect(hero: IHero) {
    this.selectedHero = hero;
  };

  inputTarget: string = "";
  hasInputTarget: boolean = false;
  public greeting() {
    console.log(this.inputTarget);
  };

  public onKeyDown(e: any) {
    console.log('changing!');
    this.hasInputTarget = !!e.target.value;
  };

}
