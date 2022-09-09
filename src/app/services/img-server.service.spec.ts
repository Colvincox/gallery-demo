import { TestBed } from '@angular/core/testing';

import { ImgServerService } from './img-server.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('ImgServerService', () => {
  let service: ImgServerService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ImgServerService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return correct image elements', () => {
    service.getImgs().subscribe((result) => {
      expect(result).toBeTruthy(); //not null
      expect(result.length).toEqual(2); //must have 2 elements
      expect(result[0].id).toEqual(1);
      expect(result[0].title).toEqual(
        'accusamus beatae ad facilis cum similique qui sunt'
      );
      expect(result[0].thumbnailUrl).toEqual(
        'https://via.placeholder.com/150/92c952'
      );
      expect(result[1].id).toEqual(2);
      expect(result[1].title).toEqual('reprehenderit est deserunt velit ipsam');
      expect(result[1].thumbnailUrl).toEqual(
        'https://via.placeholder.com/150/771796'
      );
    });

    const req = httpMock.expectOne(service.apiUrl);
    expect(req.request.method).toBe('GET');

    /* inject mock data */
    req.flush([
      {
        albumId: 1,
        id: 1,
        title: 'accusamus beatae ad facilis cum similique qui sunt',
        url: 'https://via.placeholder.com/600/92c952',
        thumbnailUrl: 'https://via.placeholder.com/150/92c952',
      },
      {
        albumId: 1,
        id: 2,
        title: 'reprehenderit est deserunt velit ipsam',
        url: 'https://via.placeholder.com/600/771796',
        thumbnailUrl: 'https://via.placeholder.com/150/771796',
      },
    ]);
  });
});
