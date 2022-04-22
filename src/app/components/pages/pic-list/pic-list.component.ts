import {
  animate,
  animation,
  style,
  transition,
  trigger,
  AnimationEvent,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Pic } from '@app/shared/interface/pic.interface';

@Component({
  selector: 'app-pic-list',
  templateUrl: './pic-list.component.html',
  styleUrls: ['./pic-list.component.css'],
  animations: [
    trigger('animation', [
      transition('void=>visible', [
        style({ transform: 'scale(0.25)' }),
        animate('150ms', style({ transform: 'scale(1)' })),
      ]),
      transition('visible=>void', [
        style({ transform: 'scale(1)' }),
        animate('150ms', style({ transform: 'scale(0.25)' })),
      ]),
    ]),
    trigger('animation2',[
      transition(':leave', [
        style({ opacity:1 }),
        animate('110ms', style({  opacity:0.1  })),
      ]),
    ])
  ],
})
export class PicListComponent implements OnInit {
  @Input() galleryData: Pic[] = [];
  @Input() showCount = false;

  previewImage = false;
  showMask = false;
  currentLightboxImage: Pic = this.galleryData[0];
  currentIndex = 0;
  controls = true;
  totalImageCount = 0;

  constructor() {}

  ngOnInit(): void {
    this.totalImageCount = this.galleryData.length;
  }

  onPreviewImage(index: number): void {
    this.showMask = true;
    this.previewImage = true;
    this.currentIndex = index;
    this.currentLightboxImage = this.galleryData[index];
  }
 


  onAnimationEnd(event: AnimationEvent) {
    console.log("Sirve")
    if (event.toState == 'void') {
    }
  }
  onClosePreview() {
    this.previewImage = false;
    this.showMask = false;
    console.log(this.showMask)
  }
  prev():void{
    this.currentIndex = this.currentIndex-1;
    if(this.currentIndex<0){
      this.currentIndex=this.galleryData.length -1;
    }
    this.currentLightboxImage=this.galleryData[this.currentIndex];
  }
  next():void{
    this.currentIndex = this.currentIndex+1;
    if(this.currentIndex>this.galleryData.length -1){
      this.currentIndex=0;
    }
    this.currentLightboxImage=this.galleryData[this.currentIndex];

  }

}
