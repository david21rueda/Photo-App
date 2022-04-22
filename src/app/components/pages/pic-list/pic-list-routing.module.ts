import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PicListComponent } from './pic-list.component';

const routes: Routes = [{ path: '', component: PicListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PicListRoutingModule { }
