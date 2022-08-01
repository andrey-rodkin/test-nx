import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ParentModule } from '../../../../libs/parent/src';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ParentModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
