import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortraitRoutingModule } from './portrait-routing.module';
import { PortraitComponent } from './portrait.component';
import { PicListModule } from '../pic-list/pic-list.module';


@NgModule({
  declarations: [
    PortraitComponent
  ],
  imports: [
    CommonModule,
    PortraitRoutingModule,
    PicListModule
  ]
})
export class PortraitModule { }
