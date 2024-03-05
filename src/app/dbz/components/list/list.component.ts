import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/characters';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input()
  public characterList: Array<Character> = [
    {
      name: 'Gocku',
      power: 9000,
    },
    {
      name: 'Vegeta',
      power: 8000,
    },
  ];
}
