import { Component, OnInit, Input, ViewChild, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';
import { VideoProjectmodalDirective } from '../../directives/video-projectmodal.directive';
import { Project } from '../../models/Project';

@Component({
  selector: 'app-projectmodal',
  templateUrl: './projectmodal.component.html',
  styleUrls: ['./projectmodal.component.css']
})
export class ProjectmodalComponent implements OnInit {
  @ViewChild('videoPlayer') set videoRef (videoRef: ElementRef) {
    this.video = videoRef.nativeElement;
  }
  @ViewChild('videoSlider') set sliderRef (sliderRef: ElementRef) {
    this.slider = sliderRef.nativeElement;
  }
  @ViewChild('hoverTime') set hoverRef (hoverRef: ElementRef) {
    this.hover = hoverRef.nativeElement;
  }

  @Input() project : Project;
  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();
  active = false;
  playing = false;
  loaded = false;
  displayTime = false;
  updateSlider = true;
  video: HTMLMediaElement;
  slider: HTMLInputElement;
  hover: HTMLElement;
  duration: number;
  currentTime: number = 0;
  devmode = false;
  
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.addEventListenerPlay();
    this.addEventListenerPause();
    this.addEventListenerLoadedmetadata();
    this.addEventListenerTimeupdate();
  }
  //close
  closeModal() {
    this.close.emit(false);
    console.log('close');
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
