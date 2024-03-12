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

  //Tarea emitir el indice al padre con @output y EvenEmitter
  //la propiedad nueva se llamará positionToDelete
  //consular addCharacter para dudas
  //emitir la propiedad "postitionToDelete" desde el metodo onDeleteCharacter
  //recibiré el evento del hijo que dispará un metodo nuevo de la clase mainPage "onDeleteCharacter"
  //Que me monstrara el console.log con la posicion
  onDeleteCharacter(index: number) {
    console.log(index);
  }
}
