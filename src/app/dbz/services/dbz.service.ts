import { Injectable } from '@angular/core';
import { Character } from '../interfaces/characters';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
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

  onNewCharacter(character: Character): void {
    console.log('MainPage');
    console.log(character);
    this.characters.push(character);
  }

  onDeleteCharacter(index: number) {
    console.log(index);
    this.characters.splice(index, 1);
  }
}
