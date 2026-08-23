import { Component } from '@angular/core';

import { ProjectCard } from './components/project-card/project-card';
import { PROJECTS } from './data/projects.data';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  /*
   * Project information is kept in a separate data file.
   *
   * This component passes each project to ProjectCard, which is
   * responsible for displaying one individual project.
   */
  protected readonly projects = PROJECTS;
}