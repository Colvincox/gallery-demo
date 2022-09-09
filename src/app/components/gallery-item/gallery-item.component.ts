import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Img } from '../../Img';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.css']
})
export class GalleryItemComponent implements OnInit {
  @Input() img: Img;
  @Output() sendViewLargeImageEvent: EventEmitter<Img> = new EventEmitter(); 

  constructor() { }

  ngOnInit(): void {
  }
  onViewLargeImageClick(img: Img){
    this.sendViewLargeImageEvent.emit(img);
  }
}