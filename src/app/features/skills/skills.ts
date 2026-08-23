import { Component } from '@angular/core';

import { SKILL_CATEGORIES } from './data/skills.data';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  /*
   * Skill information is maintained separately from the component.
   *
   * The component simply exposes the data so the HTML template can
   * render any number of skill categories.
   */
  protected readonly skillCategories = SKILL_CATEGORIES;
}