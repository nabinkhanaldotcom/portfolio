import { Component, inject } from '@angular/core';

import { ThemeService } from '../../../core/services/theme';

@Component({
  selector: 'app-theme-toggle',
  imports: [],
  templateUrl: './theme-toggle.html',
  styleUrl: './theme-toggle.scss',
})
export class ThemeToggle {
  /*
   * Angular Dependency Injection gives this component the
   * application's shared ThemeService instance.
   */
  protected readonly themeService =
    inject(ThemeService);


  protected toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}