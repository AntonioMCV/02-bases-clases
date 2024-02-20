import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  name: string = 'IronMan';
  age: number = 45;

  get capitalizeName(): string {
    return this.name.toLocaleUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeName(): void {
    this.name = 'Spiderman';
  }

  changeEdad(): void {
    this.age = 23;
  }

  reset(): void {
    this.name = 'IronMan';
    this.age = 45;
  }
}
