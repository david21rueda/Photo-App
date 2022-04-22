import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./components/pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'pic-list',
    loadChildren: () =>
      import('./components/pages/pic-list/pic-list.module').then(
        (m) => m.PicListModule
      ),
  },
  {
    path: 'aboutme',
    loadChildren: () =>
      import('./components/pages/aboutme/aboutme.module').then(
        (m) => m.AboutmeModule
      ),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./components/pages/contact/contact.module').then(
        (m) => m.ContactModule
      ),
  },
  {
    path: 'portrait',
    loadChildren: () =>
      import('./components/pages/portrait/portrait.module').then(
        (m) => m.PortraitModule
      ),
  },
  {
    path: 'landscape',
    loadChildren: () =>
      import('./components/pages/landscape/landscape.module').then(
        (m) => m.LandscapeModule
      ),
  },
  {
    path: 'animals',
    loadChildren: () =>
      import('./components/pages/animals/animals.module').then(
        (m) => m.AnimalsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
