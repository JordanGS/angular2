import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  template: `
  <h1>{{title}}</h1>
  <!--
  <div *ngIf="selectedHero">
    <h2>{{selectedHero.name}} details!</h2>
    <div><label>id: </label>{{selectedHero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="selectedHero.name" placeholder="name"/>
    </div>
  </div>
  -->
  <h2>My Heroes</h2>
  <ul>
    <li style="list-style: none; padding-top: 3px;" *ngFor="let hero of heroes" 
      [class.selected]="hero === selectedHero"
      (click)="onSelect(hero)">
      <hero-modal [hero]="hero"></hero-modal>
      <!--<span class="badge">{{hero.id}}</span> {{hero.name}}-->
    </li>
  </ul>
  <!--
  <hero-detail [hero]="selectedHero"></hero-detail>
  <hero-detail [hero]="selectedHero"></hero-detail>
  <hero-modal></hero-modal>
  -->
`,
  styles: [`
  /* the selected item in the list */
  .selected {
    background-color: #f97b74 !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #555;
    color: #FFF;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  /* hover the selected event */
  .heroes li.selected:hover {
    background-color: black !important;
    color: white;
  }
  /* this is the on cover event */
  .heroes li:hover {
    color: #f97b74;
    background-color: #FFF;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #f97b74;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`],
  providers: [HeroService]
})
export class AppComponent implements OnInit  {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  getHeroesSlowly(): void {
    // clearthis.heroes = this.heroService.getHeroesSlowly();
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroesSlowly();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
