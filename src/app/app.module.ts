import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FirstFormComponent } from './first-form/first-form.component';
import { SecondFormComponent } from './second-form/second-form.component';
import { ThirdFormComponent } from './third-form/third-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FirstFormComponent,
    SecondFormComponent,
    ThirdFormComponent
  ],
  imports: [
    BrowserModule, FormsModule, CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
