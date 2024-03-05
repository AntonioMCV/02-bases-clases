import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public heroDeleted?: string;
  public heroNames: Array<string> = [
    'Superman',
    'Batman',
    'Spiderman',
    'Hulk',
    'Ironman',
  ];

  deleteLastHero() {
    this.heroDeleted = this.heroNames.pop();
  }
}
