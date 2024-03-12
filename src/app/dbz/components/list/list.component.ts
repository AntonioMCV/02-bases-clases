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
  ];

  //reconger el indice y mostrarlo en consola
  onDeleteCharacter(index) {
    console.log(index);
  }
}
