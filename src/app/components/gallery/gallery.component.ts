import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

import { ImgServerService } from '../../services/img-server.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { Img } from '../../Img';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  //view large Image variables
  imageTitle = '';
  imageURL = '';
  viewerOpen = false;
  modalVisible = false;

  //pagination variables
  title = 'pagination';
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 20;

  imgs: Img[] = [];

  constructor(
    private imgServerService: ImgServerService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.imgServerService.getImgs().subscribe((img) => (this.imgs = img));//refresh images array from ImgServerService
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.imgServerService.getImgs().subscribe((img) => (this.imgs = img));//refresh images array from ImgServerService
  }

  @ViewChild('viewImageModal') viewImageModal: TemplateRef<any>; // Note: TemplateRef

  
  viewLargeImage(img: Img) {
    this.imageTitle = img.title;
    this.imageURL = img.url;
    this.modalVisible = true;
    /* call back when modal is offscreen */
    this.modalService
      .open(this.viewImageModal, { backdrop: 'static' })
      .hidden.subscribe(() => (this.modalVisible = false));
  }
}
