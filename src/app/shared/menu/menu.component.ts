import { Hero } from './../../hero.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'João'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
