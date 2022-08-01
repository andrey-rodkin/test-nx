import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Service } from './service';
import { TOKEN } from '../../../model/src/lib/token';

@NgModule({
  imports: [CommonModule],
  providers: [{ provide: TOKEN, useClass: Service }],
})
export class ImplementationModule {}
