import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timer'
})
export class TimerPipe implements PipeTransform {

  transform(time: number): string {
    return this.changeSecondsToMMSS(time);
  }

  changeSecondsToMMSS(time: number) {
    time = Math.floor(time);

    if(time < 10) {
      return `0:0${time}`;
    } else if (time < 60) {
      return `0:${time}`;      
    } else if (time < 60 * 60) {
      let minutes = Math.floor(time/60);
      let seconds = time % 60;

      if (seconds < 10) {
        return `${minutes}:0${seconds}`;
      } else {
        return `${minutes}:${seconds}`;
      }
    } else {
      //Not implimented
      return 'error';
    }
  }
}
