import { Component, OnInit, Input, ViewChild, ElementRef, HostListener } from '@angular/core';
import { VideoProjectmodalDirective } from '../../directives/video-projectmodal.directive';

@Component({
  selector: 'app-projectmodal',
  templateUrl: './projectmodal.component.html',
  styleUrls: ['./projectmodal.component.css']
})
export class ProjectmodalComponent implements OnInit {
  @ViewChild('videoPlayer') videoRef: ElementRef;
  @ViewChild('videoSlider') sliderRef: ElementRef;
  @ViewChild('hoverTime') hoverRef: ElementRef;

  playing = false;
  loaded = false;
  displayTime = false;
  updateSlider = true;
  video: HTMLMediaElement;
  slider: HTMLInputElement;
  hover: HTMLElement;
  duration: number;
  currentTime: number = 0;
  devmode = true;
  

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.video = this.videoRef.nativeElement;
    this.slider = this.sliderRef.nativeElement;
    this.hover = this.hoverRef.nativeElement;
    this.addEventListenerPlay();
    this.addEventListenerPause();
    this.addEventListenerLoadedmetadata();
    this.addEventListenerTimeupdate();
  }
  //slider change time
  updateTime(time: number): void {
     this.video.currentTime = time;
     this.currentTime = time;
     this.moveHover();
  }

  moveHover(): void {
    let moveDistance = Math.floor(this.currentTime * 300 / this.duration);
    this.hover.style.left =  moveDistance.toString()+'px';
    console.log(moveDistance+'px');
  }

  //Play or Pause
  playPause() {
    if(this.video.paused) {
      this.video.play();
    } else {
      this.video.pause();
    }
  }

  // Event Listeners
  addEventListenerPlay() {
    this.video.addEventListener('play', () => {
      this.playing = true;
    });
  }

  addEventListenerPause() {
    this.video.addEventListener('pause', () => {
      this.playing = false;
    });
  }

  addEventListenerLoadedmetadata() {
    this.video.addEventListener('loadedmetadata', () => {
    this.duration = this.video.duration;
    this.loaded = true;

    });
  }

  addEventListenerTimeupdate() {
    this.video.addEventListener('timeupdate', () => {
      if (this.updateSlider) this.currentTime = this.video.currentTime;
    });
  }
}
