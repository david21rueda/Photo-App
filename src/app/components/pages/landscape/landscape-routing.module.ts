import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandscapeComponent } from './landscape.component';

const routes: Routes = [{ path: '', component: LandscapeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandscapeRoutingModule { }
