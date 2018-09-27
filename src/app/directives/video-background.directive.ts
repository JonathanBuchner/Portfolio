import { Directive, OnInit, ElementRef } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';

@Directive({
  selector: '[video-background]'
})

export class VideoBackgroundDirective implements OnInit {
  private video: HTMLMediaElement;
  private timeout: any;

  constructor(private elRef: ElementRef, public router: Router) { 
    this.video = elRef.nativeElement;

    router.events.pipe(filter(e => e instanceof NavigationStart)).subscribe(event => {
      clearTimeout(this.timeout);
      this.video.pause();
      this.video.play();
    });
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.addEventListenerTimeUpdate();   
  }

  addEventListenerTimeUpdate() {
    this.video.addEventListener('play', () => {
      this.timeout = setTimeout( ()=>{
        this.video.pause();
      }, 1500);
    });
  }

  //Video is 12 seconds.  First time it should play 4 seconds, then another 4 seconds, then another 4 seconds.  When it finishes, the third time, it will restart.  You can get out of the 4 second sequence and the video will automatically loop.
  addEventListenerTimePause() {
    this.video.addEventListener('pause', () => {
      if(this.video.currentTime > 9) {              
        this.video.currentTime = 0;
      }
    });
  }
}
