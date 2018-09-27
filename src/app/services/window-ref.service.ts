import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowRefService {

  constructor() { }
  
  nativeWindow(): any {
    return window;
  }
}
