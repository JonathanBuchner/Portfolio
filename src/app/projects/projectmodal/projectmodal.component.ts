import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { VideoProjectmodalDirective } from '../../directives/video-projectmodal.directive';

@Component({
  selector: 'app-projectmodal',
  templateUrl: './projectmodal.component.html',
  styleUrls: ['./projectmodal.component.css']
})
export class ProjectmodalComponent implements OnInit {
  @ViewChild('videoPlayer') videoRef: ElementRef;
  @ViewChild('videoSlider') sliderRef: ElementRef;

  playing = false;
  loaded = false;
  video: HTMLMediaElement;
  slider: HTMLInputElement;
  duration: number;
  currentTime: number = 0;
  

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.video = this.videoRef.nativeElement;
    this.slider = this.sliderRef.nativeElement;
    this.addEventListenerPlay();
    this.addEventListenerPause();
    this.addEventListenerLoadedmetadata();
    this.addEventListenerTimeupdate();
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
     this.currentTime = this.video.currentTime;
    });
  }
}
