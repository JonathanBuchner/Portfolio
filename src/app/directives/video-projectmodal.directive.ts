import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[video-project-modal]'
})

export class VideoProjectmodalDirective implements OnInit {
  private video: HTMLMediaElement;
  private play: HTMLElement;
  private playing = false;

  constructor( 
      private videoRef: ElementRef,
      private playRef: ElementRef
    ) { 
    this.video = videoRef.nativeElement;
    this.play = playRef.nativeElement;
  }

  ngOnInit() {}

  ngAfterViewInit(){
    this.addEventListenerPlay
  }

  addEventListenerPlay() {
    this.video.addEventListener('play', () => {

    });
  }
}
