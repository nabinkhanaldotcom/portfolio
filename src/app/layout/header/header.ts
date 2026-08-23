import { Component, signal } from '@angular/core';

import { ThemeToggle } from '../../shared/components/theme-toggle/theme-toggle';

@Component({
  selector: 'app-header',
  imports: [ThemeToggle],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  /*
   * Controls whether the navigation menu is open on smaller screens.
   */
  protected readonly menuOpen = signal(false);


  protected toggleMenu(): void {
    this.menuOpen.update(
      (isOpen) => !isOpen,
    );
  }


  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}