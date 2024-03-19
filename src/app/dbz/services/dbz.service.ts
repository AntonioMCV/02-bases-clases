import { Injectable } from '@angular/core';
import { Character } from '../interfaces/characters';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  public characters: Array<Character> = [
    {
      id: uuid(),
      name: 'satan',
      power: 9,
    },
    {
      id: uuid(),
      name: 'krillin',
      power: 5000,
    },
    {
      id: uuid(),
      name: 'trunks',
      power: 6000,
    },
    {
      id: uuid(),
      name: 'Gohan',
      power: 7000,
    },
  ];

  onNewCharacter(character: Character): void {
    console.log('MainPage');
    console.log(character);
    character = { ...character, id: uuid() };
    this.characters.push(character);
  }

  onDeleteCharacter(id: string) {
    console.log(id);
    this.characters = this.characters.filter(
      (chararacter) => chararacter.id !== id
    );
  }
}
