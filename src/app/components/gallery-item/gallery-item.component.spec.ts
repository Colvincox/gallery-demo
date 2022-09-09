import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryItemComponent } from './gallery-item.component';
import { Img } from '../../Img';

describe('GalleryItemComponent', () => {
  let component: GalleryItemComponent;
  let fixture: ComponentFixture<GalleryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GalleryItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GalleryItemComponent);
    component = fixture.componentInstance;
    let img: Img = {
      albumId: 1, 
      id: 1,
      title: 'accusamus beatae ad facilis cum similique qui sunt',
      url: 'https://via.placeholder.com/600/92c952',
      thumbnailUrl: 'https://via.placeholder.com/150/92c952',
    };
    component.img = img;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
