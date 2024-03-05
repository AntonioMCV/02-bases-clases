import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPage } from './pages/dbz.main-page.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [MainPage, ListComponent],
  imports: [CommonModule],
  exports: [MainPage],
})
export class DbzModule {}
