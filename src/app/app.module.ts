import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from  'ng-gallery/lightbox';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PicListModule } from './components/pages/pic-list/pic-list.module';
import { FooterComponent } from './shared/components/footer/footer.component';


@NgModule({
  exports: [MatButtonModule],
  imports: [BrowserAnimationsModule],
})
export class MaterialModule {}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    MaterialModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    GalleryModule,
    LightboxModule,
    HttpClientModule,
    PicListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
