import { Directive, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Observable, of } from 'rxjs';

@Directive({
  selector: '[video-project]',
})

export class VideoProjectmodalDirective implements OnInit {
  private video: HTMLMediaElement;
  private playing = false;

  constructor(private videoRef: ElementRef) { 
    this.video = videoRef.nativeElement;
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.video = this.videoRef.nativeElement;
    this.addEventListenerPlay();
    this.addEventListenerPause();
  }

  //Observables
  getPlayPauseState(): Observable<boolean> {
    return of (this.playing);
  }

  //Play or Pause
  playPause() {
    if(this.playing) {
      this.video.pause();
    } else {
      this.video.play();
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
}
