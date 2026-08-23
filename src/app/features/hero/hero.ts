import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  /*
   * My professional software-development experience started in 2018.
   *
   * We calculate this dynamically so the portfolio stays current
   * without manually changing "8+ years" every January.
   */
  private readonly careerStartYear = 2018;

  protected readonly experienceYears =
    new Date().getFullYear() - this.careerStartYear;
}