import { DOCUMENT } from '@angular/common';
import { computed, inject, Injectable, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  /*
   * The browser document lets us set an attribute on the root
   * <html> element:
   *
   * <html data-theme="light">
   *
   * or
   *
   * <html data-theme="dark">
   */
  private readonly document = inject(DOCUMENT);

  /*
   * localStorage key used to remember the visitor's selection.
   */
  private readonly storageKey = 'portfolio-theme';


  /*
   * Internal writable theme state.
   *
   * Components outside this service should not directly change it.
   */
  private readonly themeState = signal<Theme>(
    this.getSavedTheme(),
  );


  /*
   * Read-only theme value that other components can observe.
   */
  readonly theme = this.themeState.asReadonly();


  /*
   * Derived Signal.
   *
   * true  = dark theme
   * false = light theme
   */
  readonly isDarkTheme = computed(
    () => this.themeState() === 'dark',
  );


  constructor() {
    /*
     * Apply the remembered theme as soon as this service starts.
     */
    this.applyTheme(this.themeState());
  }


  /*
   * Switches between light and dark mode.
   */
  toggleTheme(): void {
    const newTheme: Theme =
      this.themeState() === 'light'
        ? 'dark'
        : 'light';

    this.setTheme(newTheme);
  }


  /*
   * Changes the theme and remembers the visitor's choice.
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
   * Reads a previously saved theme.
   *
   * If there is no saved theme, the site starts in light mode.
   */
  private getSavedTheme(): Theme {
    const savedTheme =
      localStorage.getItem(this.storageKey);

    return savedTheme === 'dark'
      ? 'dark'
      : 'light';
  }


  /*
   * Applies the theme to the root HTML element.
   */
  private applyTheme(theme: Theme): void {
    this.document.documentElement.setAttribute(
      'data-theme',
      theme,
    );
  }
}