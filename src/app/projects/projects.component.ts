import { Component, OnInit } from '@angular/core';
import { PROFESSIONALPROJECTS, PERSONALPROJECTS } from '../data/PROJECTS';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  private professionalProjects = PROFESSIONALPROJECTS
  private personalProjects = PERSONALPROJECTS

  constructor() { }

  ngOnInit() {
  }

}
