import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiddleSectionRoutingModule } from './middle-section-routing.module';
import { MainMenuComponent } from './main-menu/main-menu.component';

@NgModule({
  imports: [
    CommonModule,
    MiddleSectionRoutingModule
  ],
  declarations: [MainMenuComponent]
})
export class MiddleSectionModule { }
