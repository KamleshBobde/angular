import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LeftSectionComponent } from './left-section/left-section.component';
import { RightSectionComponent } from './right-section/right-section.component';
import { SubmitButtonComponent } from './common/submit-button/submit-button.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginServiceService } from './services/login-service.service';

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent, LeftSectionComponent, RightSectionComponent, SubmitButtonComponent],
  imports: [ AppRoutingModule, BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule,RouterModule.forRoot([])],
  providers: [LoginServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
