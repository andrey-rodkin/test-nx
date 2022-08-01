import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child2Module } from '../../../child2/src';
import { Child1Module } from '../../../child1/src';
import { Child3Module } from '../../../child3/src';
import { ImplementationModule } from '../../../implementation/src';

@NgModule({
  imports: [
    CommonModule,
    Child1Module,
    Child2Module,
    Child3Module,
    ImplementationModule,
  ],
})
export class ParentModule {}
