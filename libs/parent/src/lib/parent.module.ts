import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child2Module } from '@stackblitz-nx-angular/child2';
import { Child1Module } from '@stackblitz-nx-angular/child1';
import { Child3Module } from '@stackblitz-nx-angular/child3';
import { ImplementationModule } from '@stackblitz-nx-angular/implementation';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [{ path: '', component: ParentComponent }];

@NgModule({
  imports: [
    CommonModule,
    Child1Module,
    Child2Module,
    Child3Module,
    ImplementationModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ParentComponent],
})
export class ParentModule {}
