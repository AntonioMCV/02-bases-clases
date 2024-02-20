import { NgModule } from '@angular/core';
import { Counter } from './componets/counter.component';

@NgModule({
  declarations: [Counter],
  exports: [Counter],
})
export class CounterModule {}
