import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PicListRoutingModule } from './pic-list-routing.module';
import { PicListComponent } from './pic-list.component';

@NgModule({
  declarations: [PicListComponent],
  imports: [CommonModule, PicListRoutingModule],
  exports:[PicListComponent],
})
export class PicListModule {}
