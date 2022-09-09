import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryComponent } from './gallery.component';
import { ImgServerService } from '../../services/img-server.service';

import { NgxPaginationModule } from 'ngx-pagination';

import { Img } from '../../Img';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('GalleryComponent', () => {
  let component: GalleryComponent;

  let fixture: ComponentFixture<GalleryComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, NgxPaginationModule],
      declarations: [GalleryComponent],
      providers: [ImgServerService],
    }).compileComponents();
    httpMock = TestBed.inject(HttpTestingController);

    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
    //component.page
  });
  it('should call viewLargeImage() and set correct values', () => {
    let img: Img = {
      albumId: 1,
      id: 1,
      title: 'accusamus beatae ad facilis cum similique qui sunt',
      url: 'https://via.placeholder.com/600/92c952',
      thumbnailUrl: 'https://via.placeholder.com/150/92c952',
    };
    component.viewLargeImage(img);

    expect(component.imageTitle).toEqual(img.title);
    expect(component.imageURL).toEqual(img.url);
    expect(component.modalVisible).toEqual(true);
  });
});
