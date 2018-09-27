import { Component, OnInit } from '@angular/core';
import { PROFESSIONALPROJECTS, PERSONALPROJECTS } from '../data/PROJECTS';
import { Project } from '../models/Project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  professionalProjects = PROFESSIONALPROJECTS;
  personalProjects = PERSONALPROJECTS;
  selectedProject : Project = null;

  constructor() { }

  ngOnInit() {
  }

  selectProject(project: Project): void {
    this.selectedProject = project;
  console.log(this.selectedProject);
  }
}
