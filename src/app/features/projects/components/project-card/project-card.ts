import { Component, input } from '@angular/core';

import { Project } from '../../models/project';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  /*
   * The parent Projects component must provide one Project.
   *
   * input.required<Project>() means this component cannot be used
   * correctly without receiving project data.
   */
  readonly project = input.required<Project>();
}