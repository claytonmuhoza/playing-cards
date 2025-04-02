import { Component, Input } from '@angular/core';
import Monster from '../../models/Monster';

@Component({
  selector: 'app-playing-card',
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.css'
})
export class PlayingCardComponent {
  @Input() monster: Monster = new Monster(
    'Monster',
    100,
    'Monster Figure Caption',
    'Monster Attack Name',
    10, 'description of the attack');

}
