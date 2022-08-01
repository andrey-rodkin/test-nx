import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child1Service } from './child1.service';

@NgModule({
  imports: [CommonModule],
  providers: [Child1Service],
})
export class Child1Module {}
