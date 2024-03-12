import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/characters';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
})
export class AddCharacterComponent {
  @Output()
  public addCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0,
  };

  emitCharacter() {
    if (this.character.name.trim() === '') return;
    this.addCharacter.emit(this.character);

    this.character = {
      name: '',
      power: 0,
    };
  }
}
