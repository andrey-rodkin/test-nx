import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child2Service } from './child2.service';

@NgModule({
  imports: [CommonModule],
  providers: [Child2Service]
})
export class Child2Module {}
