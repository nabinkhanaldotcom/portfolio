import { Component } from '@angular/core';

import { WORK_EXPERIENCE } from './data/work-experience.data';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  /*
   * Work-history data is stored in a separate data file.
   *
   * This component exposes that data to experience.html so the
   * template can loop through it using Angular's @for syntax.
   */
  protected readonly experiences = WORK_EXPERIENCE;
}