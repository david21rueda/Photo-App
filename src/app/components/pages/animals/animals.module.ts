import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsRoutingModule } from './animals-routing.module';
import { AnimalsComponent } from './animals.component';
import { PicListModule } from '../pic-list/pic-list.module';


@NgModule({
  declarations: [
    AnimalsComponent
  ],
  imports: [
    CommonModule,
    AnimalsRoutingModule,
    PicListModule
  ]
})
export class AnimalsModule { }
