import { Component, input } from '@angular/core';
import { Character } from '../interfaces/characters';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'dbz-main-page',
  templateUrl: 'main-page.component.html',
  styles: 'img { max-width: 100% }',
})
export class MainPage {
  constructor(private dbzService: DbzService) {}

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id: string) {
    this.dbzService.onDeleteCharacter(id);
  }

  onNewCharacter(character: Character) {
    this.dbzService.onNewCharacter(character);
  }
}
