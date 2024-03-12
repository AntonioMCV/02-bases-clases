import { Component, input } from '@angular/core';
import { Character } from '../interfaces/characters';

@Component({
  selector: 'dbz-main-page',
  templateUrl: 'main-page.component.html',
  styles: 'img { max-width: 100% }',
})
export class MainPage {
  public characters: Array<Character> = [
    {
      name: 'satan',
      power: 9,
    },
    {
      name: 'krillin',
      power: 5000,
    },
    {
      name: 'trunks',
      power: 6000,
    },
    {
      name: 'Gohan',
      power: 7000,
    },
  ];
}
