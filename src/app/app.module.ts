import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GalleryItemComponent } from './components/gallery-item/gallery-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, GalleryComponent, GalleryItemComponent],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
    NgxPaginationModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
