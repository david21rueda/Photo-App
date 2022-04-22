import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandscapeRoutingModule } from './landscape-routing.module';
import { LandscapeComponent } from './landscape.component';
import { PicListModule } from '../pic-list/pic-list.module';


@NgModule({
  declarations: [
    LandscapeComponent
  ],
  imports: [
    CommonModule,
    LandscapeRoutingModule,
    PicListModule
  ]
})
export class LandscapeModule { }
