import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ImageFilterPipe } from './shared/filter.pipe'
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageComponent } from './image/image.component';
import {ImageService } from './shared/image.service';
import { appRoutes } from './router/router';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImageComponent,
    ImageFilterPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ImageService,
    ImageFilterPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
