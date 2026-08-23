import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  /*
   * My professional software-development experience started in 2018.
   *
   * This keeps the number of years current automatically.
   */
  private readonly careerStartYear = 2018;

  protected readonly experienceYears =
    new Date().getFullYear() - this.careerStartYear;
}