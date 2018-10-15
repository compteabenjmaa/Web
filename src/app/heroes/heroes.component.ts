import { Component, OnInit } from '@angular/core';
import { Heroes} from '../heroes';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  constructor(private hero:Heroes) { }

  ngOnInit() {

    this.hero.name = 'WindStorm' ;
  }

}
