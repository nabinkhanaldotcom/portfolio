import { DOCUMENT } from '@angular/common';
import { computed, inject, Injectable, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  /*
   * Gives us access to the root HTML document.
   */
  private readonly document = inject(DOCUMENT);

  /*
   * Browser storage key used to remember the selected theme.
   */
  private readonly storageKey = 'portfolio-theme';

  /*
   * If the visitor already selected a theme, use it.
   *
   * Otherwise the portfolio starts in dark mode.
   */
  private readonly themeState = signal<Theme>(
    this.getSavedTheme(),
  );

  /*
   * Read-only theme state exposed to components.
   */
  readonly theme = this.themeState.asReadonly();

  /*
   * Derived state used by the theme toggle.
   */
  readonly isDarkTheme = computed(
    () => this.themeState() === 'dark',
  );

  constructor() {
    this.applyTheme(this.themeState());
  }


  /*
   * Switch between dark and light.
   */
  toggleTheme(): void {
    const newTheme: Theme =
      this.themeState() === 'dark'
        ? 'light'
        : 'dark';

    this.setTheme(newTheme);
  }


  /*
   * Update the theme and remember the visitor's choice.
   */
  setTheme(theme: Theme): void {
    this.themeState.set(theme);

    this.applyTheme(theme);

    localStorage.setItem(
      this.storageKey,
      theme,
    );
  }


  /*
   * If Light was explicitly saved, use Light.
   *
   * Otherwise use Dark.
   *
   * This means Dark is the default for a first-time visitor.
   */
  private getSavedTheme(): Theme {
    const savedTheme =
      localStorage.getItem(this.storageKey);

    return savedTheme === 'light'
      ? 'light'
      : 'dark';
  }


  /*
   * Applies:
   *
   * <html data-theme="dark">
   *
   * or:
   *
   * <html data-theme="light">
   */
  private applyTheme(theme: Theme): void {
    this.document.documentElement.setAttribute(
      'data-theme',
      theme,
    );
  }
}