import { Component, OnInit } from '@angular/core';
import { BACKGROUNDINFORMATION } from '../data/BACKGROUNDINFORMATION';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {
  backgroundInformation = BACKGROUNDINFORMATION;

  constructor() { }

  ngOnInit() {
  }

}
