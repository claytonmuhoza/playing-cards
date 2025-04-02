import { Component } from '@angular/core';
import { PlayingCardComponent } from "./component/playing-card/playing-card.component";
import Monster from './models/Monster';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [PlayingCardComponent],

 })
export class AppComponent {
  title = 'playing-cards';
  monster1 : Monster;
  constructor(){
    this.monster1 = new Monster(
      'Electric',
      83,
      'Electric Figure Caption',
      'Electric Attack Name',
      20,
      'description of the attack'
    );
  }
}
