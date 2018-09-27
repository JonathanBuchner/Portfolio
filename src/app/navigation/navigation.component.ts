import { Component, OnInit } from '@angular/core';
import { WindowRefService } from '../services/window-ref.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  atTop = true;

  constructor(private window: WindowRefService) { }

  ngOnInit() {
    this.addEventListernScroll();
  }

  addEventListernScroll() {
    window.addEventListener('scroll', () => {
      let pos = window.scrollY;
      if ( pos > 30 ) {
        this.atTop = false
      } else {
        this.atTop = true;
      }
    });
  }
}
