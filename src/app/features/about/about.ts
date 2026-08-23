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
   * We calculate the number of years from the current calendar year
   * instead of hard-coding something like "8+ years".
   *
   * Example:
   *
   * 2026 - 2018 = 8
   * 2027 - 2018 = 9
   *
   * This means the portfolio automatically stays current each year.
   *
   * We intentionally do not use month or day because the portfolio
   * only needs the year-based experience count.
   */
  private readonly careerStartYear = 2018;

  protected readonly experienceYears =
    new Date().getFullYear() - this.careerStartYear;
}